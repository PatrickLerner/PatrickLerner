// Reads daily-note frontmatter from the Obsidian vault, clusters the
// geocoordinates into places, and writes src/travels.json.
//
// CI has no access to the notes, so run this LOCALLY and commit the JSON:
//   npm run travels
//
// Daily notes carry frontmatter like:
//   location:
//     - Book-lover Park, Yerevan, Armenia
//   coordinates:
//     - 40.173, 44.517

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const VAULT = join(process.env.HOME, 'notes', '1X Journal')
const REPORTS = join(process.env.HOME, 'notes', '4X Areas', 'Travel', 'Adventures & Activities')
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'travels.json')
const CLUSTER_KM = 40

// --- editable overrides -----------------------------------------------------
// Home base. Any point within HOME_RADIUS_KM of it counts as "home" (Bensheim),
// which folds the whole Rhein-Neckar / Odenwald home region into one place.
const HOME = 'Heidelberg'
const HOME_COUNTRY = 'Germany'
const HOME_COORDS = { lat: 49.68, lng: 8.62 }
const HOME_RADIUS_KM = 35
const HOME_ALIASES = new Set(['Heidelberg', 'Erbach', 'Bensheim', 'Lautertal', 'Lorsch'])
// Locations to ignore entirely (bad geocodes, not real stays).
const DROP = new Set(['Altenstadt'])
// Coordinates [lat, lng] for places that never got a reliable geotag.
const GAZETTEER = {
  Niš: [43.3209, 21.8958],
  Koblenz: [50.3569, 7.589],
  Mainz: [49.9929, 8.2473],
  'Novi Sad': [45.2671, 19.8335],
  Ohrid: [41.1231, 20.8016],
  Leipzig: [51.3397, 12.3731],
  Munich: [48.1374, 11.5755],
  Budapest: [47.4979, 19.0402],
  Ljubljana: [46.0569, 14.5058],
  Bled: [46.3683, 14.1146],
  Salzburg: [47.8095, 13.055],
  Regensburg: [49.0134, 12.1016],
  Luxembourg: [49.6116, 6.1319],
  Metz: [49.1193, 6.1757],
  Limburg: [50.3836, 8.0525],
  Fulda: [50.5558, 9.6808],
}
// Country for places we only know by label.
const CITY_COUNTRY = {
  Niš: 'Serbia',
  'Novi Sad': 'Serbia',
  Koblenz: 'Germany',
  Mainz: 'Germany',
  Ohrid: 'North Macedonia',
  Leipzig: 'Germany',
  Munich: 'Germany',
  Budapest: 'Hungary',
  Ljubljana: 'Slovenia',
  Bled: 'Slovenia',
  Salzburg: 'Austria',
  Regensburg: 'Germany',
  Luxembourg: 'Luxembourg',
  Metz: 'France',
  Limburg: 'Germany',
  Fulda: 'Germany',
  Berlin: 'Germany',
}
// Relabel a place and move its dot to the target city's coordinates.
const CITY_REMAP = {
  Dresden: 'Leipzig',
  'B&B HOTEL Leipzig-City': 'Leipzig',
  Tegernsee: 'Munich',
  Sarıyer: 'Istanbul',
  Sariyer: 'Istanbul',
  Kadıköy: 'Istanbul',
  Kadikoy: 'Istanbul',
  Üsküdar: 'Istanbul',
  Uskudar: 'Istanbul',
}
// Normalise messy trip-report heading labels.
const LABEL_ALIAS = { Nis: 'Niš', 'Novy Sad': 'Novi Sad', Krakau: 'Kraków', Wroclaw: 'Wrocław' }
// Force one label onto a whole trip report (excursions shouldn't split it).
const REPORT_LABEL = {
  '2024 Rhine Valley': { city: 'Mainz', country: 'Germany' },
  '2025 Macedonia Trip': { city: 'Skopje', country: 'North Macedonia' },
}

// Detect a city named in a note title, e.g. "Szimpla Kert, Budapest".
const CITY_PATTERNS = [
  [/münchen|munich/i, 'Munich'],
  [/budapest/i, 'Budapest'],
  [/ljubljana/i, 'Ljubljana'],
  [/\bbled\b/i, 'Bled'],
  [/zagreb/i, 'Zagreb'],
  [/skopje/i, 'Skopje'],
  [/ohrid/i, 'Ohrid'],
  [/salzburg/i, 'Salzburg'],
  [/regensburg/i, 'Regensburg'],
  [/luxem(b|bo)urg/i, 'Luxembourg'],
  [/\bmetz\b/i, 'Metz'],
  [/limburg/i, 'Limburg'],
  [/fulda/i, 'Fulda'],
  [/prag(ue|a)?\b/i, 'Prague'],
  [/wroc[łl]aw/i, 'Wrocław'],
  [/krak(ów|ow|au)/i, 'Kraków'],
  [/ostrava/i, 'Ostrava'],
  [/belgrad|beograd/i, 'Belgrade'],
  [/niš|\bnis\b/i, 'Niš'],
  [/novi sad/i, 'Novi Sad'],
  [/catania/i, 'Catania'],
  [/berlin/i, 'Berlin'],
  [/mainz/i, 'Mainz'],
  [/koblenz/i, 'Koblenz'],
  [/leipzig|dresden/i, 'Leipzig'],
  [/istanbul|sar[ıi]yer/i, 'Istanbul'],
  [/yerevan/i, 'Yerevan'],
  [/bensheim|heidelberg|erbach/i, 'Bensheim'],
]
function detectCity(text) {
  let best = null
  let bestIdx = -1
  for (const [re, city] of CITY_PATTERNS) {
    const m = text.match(re)
    if (m && m.index > bestIdx) {
      best = city
      bestIdx = m.index
    }
  }
  return best
}
// Trip-report headings that are not places.
const META_HEADING = /^(participants?|diar|departure|home|arrival|back|notes|itinerary)/i

function walk(dir) {
  let out = []
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    const s = statSync(p)
    if (s.isDirectory()) out = out.concat(walk(p))
    else if (/^\d{4}-\d{2}-\d{2}.*\.md$/.test(entry)) out.push(p)
  }
  return out
}

function haversineKm(a, b) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLng = ((b.lng - a.lng) * Math.PI) / 180
  const la1 = (a.lat * Math.PI) / 180
  const la2 = (b.lat * Math.PI) / 180
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

// Best-effort city + country from a messy location string like
// "Yerevan 2800th Anniversary Park, Yerevan, Armenia" or "Kadıköy/İstanbul, ...".
function parsePlace(location) {
  const parts = location
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const rawCity = parts.length >= 2 ? parts[parts.length - 2] : parts[0] || ''
  let city = rawCity
    .split('/')
    .pop()
    .replace(/^\d+\s*/, '')
    .trim()
  const aliases = { İstanbul: 'Istanbul', Krakau: 'Kraków', Wroclaw: 'Wrocław' }
  city = aliases[city] || city

  const joined = location.toLowerCase()
  // Collapse neighbourhoods of a big city to the city itself.
  if (/istanbul/.test(joined)) city = 'Istanbul'
  else if (/yerevan/.test(joined)) city = 'Yerevan'
  else if (/prague|praha/.test(joined)) city = 'Prague'
  // Home-region towns count as Bensheim.
  if (HOME_ALIASES.has(city)) city = HOME

  let country = ''
  if (/deutschland|germany/.test(joined)) country = 'Germany'
  else if (/armenia|hayastan/.test(joined)) country = 'Armenia'
  else if (/istanbul|türkei|turkiye|türkiye|turkey/.test(joined)) country = 'Turkey'
  else if (/prague|praha|ostrava|czech/.test(joined)) country = 'Czechia'
  else if (/wroc|krak|poland|polska/.test(joined)) country = 'Poland'
  else if (/belgrade|beograd|serbia|srbija|novi sad/.test(joined)) country = 'Serbia'
  else if (/zagreb|croatia|hrvatska/.test(joined)) country = 'Croatia'
  else if (/catania|sicil|ital/.test(joined)) country = 'Italy'
  else if (/skopje|macedonia|makedon/.test(joined)) country = 'North Macedonia'
  return { city, country }
}

// Scan every date-prefixed journal note (bare "2023-10-19.md" AND titled ones
// like "2023-10-19 Skopje.md"), collapsing to one record per date. Prefer a
// note that carries coordinates; keep every title around for city detection.
const noteByDate = new Map()
for (const file of walk(VAULT)) {
  const base = file.split('/').pop().replace(/\.md$/, '')
  const dm = base.match(/^(\d{4}-\d{2}-\d{2})(.*)$/)
  if (!dm) continue
  const date = dm[1]
  const title = dm[2].trim()
  const fm = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)
  let coords = null
  let city = ''
  let country = ''
  if (fm) {
    const coord = fm[1].match(
      /coordinates:[ \t]*(?:\n[ \t]*-[ \t]*)?(-?[\d.]+)[ \t]*,[ \t]*(-?[\d.]+)/
    )
    const loc = fm[1].match(/location:[ \t]*(?:\n[ \t]*-[ \t]*)?(.+)/)
    if (coord) coords = [+coord[1], +coord[2]]
    if (loc) ({ city, country } = parsePlace(loc[1].trim()))
  }
  const rec = noteByDate.get(date) || { coords: null, city: '', country: '', titles: '' }
  if (coords && !rec.coords) {
    rec.coords = coords
    if (city) {
      rec.city = city
      rec.country = country
    }
  } else if (city && !rec.city) {
    rec.city = city
    rec.country ||= country
  }
  if (title) rec.titles += ' ' + title
  noteByDate.set(date, rec)
}

// Learn representative coordinates per city from the geotagged notes, so a
// date that only names its city in the title can still be placed.
const learnCoords = {}
const learnCountry = {}
for (const rec of noteByDate.values()) {
  if (!rec.coords || !rec.city) continue
  const g = (learnCoords[rec.city] ??= { lat: 0, lng: 0, n: 0 })
  g.lat += rec.coords[0]
  g.lng += rec.coords[1]
  g.n++
  if (rec.country) learnCountry[rec.city] = rec.country
}

const days = []
for (const [date, rec] of noteByDate) {
  let city = rec.city || detectCity(rec.titles) || ''
  if (HOME_ALIASES.has(city)) city = HOME
  if (DROP.has(city)) continue
  let lat, lng
  if (rec.coords) [lat, lng] = rec.coords
  else if (city && GAZETTEER[city]) [lat, lng] = GAZETTEER[city]
  else if (city && learnCoords[city]) {
    const g = learnCoords[city]
    lat = g.lat / g.n
    lng = g.lng / g.n
  } else continue // can't place this date
  let country = rec.country || CITY_COUNTRY[city] || learnCountry[city] || ''
  // Fold the whole home region into Bensheim.
  if (haversineKm({ lat, lng }, HOME_COORDS) <= HOME_RADIUS_KM) {
    city = HOME
    country = HOME_COUNTRY
  }
  days.push({ date, lat, lng, city, country })
}

// Overlay from trip-report pages. Reports group day-notes under place headings
// ("# [[Prague]]" or plain "# Nis") or a flat "# Diaries" list. Most trip days
// have no geotagged daily note (they live only as timestamped sub-notes), so
// fill each listed date with the section's place: coordinates come from the
// gazetteer, from other geotagged days in that city, or from this trip's own
// geotagged days.
const dayByDate = new Map(days.map((d) => [d.date, d]))

// City -> representative coords/country learned from all geotagged days.
const cityCoords = {}
const cityCountry = {}
for (const d of days) {
  if (!d.city) continue
  const g = (cityCoords[d.city] ??= { lat: 0, lng: 0, n: 0 })
  g.lat += d.lat
  g.lng += d.lng
  g.n++
  if (d.country) cityCountry[d.city] = d.country
}
const modeArr = (arr) => {
  const c = {}
  for (const x of arr) if (x) c[x] = (c[x] || 0) + 1
  return Object.entries(c).sort((a, b) => b[1] - a[1])[0]?.[0] || ''
}
function coordsFor(city, tripGeo) {
  if (GAZETTEER[city]) return { lat: GAZETTEER[city][0], lng: GAZETTEER[city][1] }
  const g = cityCoords[city]
  if (g) return { lat: g.lat / g.n, lng: g.lng / g.n }
  if (tripGeo?.length) {
    return {
      lat: tripGeo.reduce((a, d) => a + d.lat, 0) / tripGeo.length,
      lng: tripGeo.reduce((a, d) => a + d.lng, 0) / tripGeo.length,
    }
  }
  return null
}

let overlaid = 0
for (const file of readdirSync(REPORTS)) {
  if (!file.endsWith('.md')) continue
  const name = file.replace(/\.md$/, '')
  const raw = [] // { date, headingCity|null, title }
  let curCity = null
  for (const line of readFileSync(join(REPORTS, file), 'utf8').split('\n')) {
    if (line.startsWith('#')) {
      const h = line.match(/\[\[([^\]]+)\]\]/)
      let label = h ? (h[1].includes('|') ? h[1].split('|').pop() : h[1]) : line.replace(/^#+\s*/, '')
      label = label.trim()
      curCity = !label || META_HEADING.test(label) ? null : LABEL_ALIAS[label] || label
      continue
    }
    const l = line.match(/-\s*\[\[([^\]|]+)/)
    if (!l) continue
    const dm2 = l[1].match(/^(\d{4}-\d{2}-\d{2})(.*)$/)
    if (dm2) raw.push({ date: dm2[1], headingCity: curCity, title: dm2[2] })
  }
  if (!raw.length) continue

  const override = REPORT_LABEL[name]
  const tripGeo = raw.map((e) => dayByDate.get(e.date)).filter(Boolean)
  const flatCity = modeArr(tripGeo.map((d) => d.city)) // last-ditch fallback

  // Resolve a city per date: heading > title mention > carried-forward > mode.
  let carried = null
  const entries = raw.map((e) => {
    let city = override ? override.city : e.headingCity || detectCity(e.title) || carried
    if (city && !override) carried = city
    return { date: e.date, city: city || flatCity }
  })

  for (const e of entries) {
    let city = e.city
    if (HOME_ALIASES.has(city)) city = HOME
    if (!city || DROP.has(city)) continue
    const existing = dayByDate.get(e.date)
    if (existing && !override) continue // keep a real geotag unless told to override
    const c = coordsFor(city, tripGeo)
    if (!c) continue
    const country = override?.country || CITY_COUNTRY[city] || cityCountry[city] || ''
    const d = { date: e.date, lat: c.lat, lng: c.lng, city, country }
    if (existing) Object.assign(existing, d)
    else {
      dayByDate.set(e.date, d)
      days.push(d)
    }
    overlaid++
  }
}
console.log(`filled ${overlaid} trip days from trip reports`)

// Relabel places and move their dots to the target city's coordinates.
for (const d of days) {
  const target = CITY_REMAP[d.city]
  if (!target) continue
  d.city = target
  const c = coordsFor(target)
  if (c) {
    d.lat = c.lat
    d.lng = c.lng
  }
  d.country = CITY_COUNTRY[target] || cityCountry[target] || d.country
}
days.sort((a, b) => a.date.localeCompare(b.date))

// Greedy proximity clustering.
const clusters = []
for (const d of days) {
  let hit = clusters.find((c) => haversineKm(c, d) <= CLUSTER_KM)
  if (!hit) {
    hit = { lat: d.lat, lng: d.lng, members: [], cities: {}, countries: {} }
    clusters.push(hit)
  }
  hit.members.push(d)
  // running centroid
  const n = hit.members.length
  hit.lat += (d.lat - hit.lat) / n
  hit.lng += (d.lng - hit.lng) / n
  if (d.city) hit.cities[d.city] = (hit.cities[d.city] || 0) + 1
  if (d.country) hit.countries[d.country] = (hit.countries[d.country] || 0) + 1
}

const mode = (obj) => Object.entries(obj).sort((a, b) => b[1] - a[1])[0]?.[0] || ''

const places = clusters
  .map((c, i) => {
    const dates = c.members.map((m) => m.date)
    return {
      id: i,
      city: mode(c.cities),
      country: mode(c.countries),
      lat: Math.round(c.lat * 10000) / 10000,
      lng: Math.round(c.lng * 10000) / 10000,
      days: dates.length,
      firstDate: dates[0],
      lastDate: dates[dates.length - 1],
    }
  })
  .filter((p) => p.city || p.days > 1)

// Chronological stays: a stay is a maximal run of consecutive located days
// that stay within CLUSTER_KM of the run's moving centroid. Leaving the area
// and coming back later produces a new stay, so the feed reads like a timeline.
const stays = []
let cur = null
for (const d of days) {
  if (cur && haversineKm(cur, d) <= CLUSTER_KM) {
    cur.members.push(d)
    const n = cur.members.length
    cur.lat += (d.lat - cur.lat) / n
    cur.lng += (d.lng - cur.lng) / n
    cur.endDate = d.date
    if (d.city) cur.cities[d.city] = (cur.cities[d.city] || 0) + 1
    if (d.country) cur.countries[d.country] = (cur.countries[d.country] || 0) + 1
  } else {
    cur = {
      lat: d.lat,
      lng: d.lng,
      members: [d],
      startDate: d.date,
      endDate: d.date,
      cities: d.city ? { [d.city]: 1 } : {},
      countries: d.country ? { [d.country]: 1 } : {},
    }
    stays.push(cur)
  }
}

const dayspan = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000) + 1
const mapped = stays.map((s, i) => ({
  id: i,
  city: mode(s.cities),
  country: mode(s.countries),
  lat: Math.round(s.lat * 10000) / 10000,
  lng: Math.round(s.lng * 10000) / 10000,
  startDate: s.startDate,
  endDate: s.endDate,
  spanDays: dayspan(s.startDate, s.endDate),
  noteDays: s.members.length,
}))
const staysOut = mapped.filter((s) => {
  if (!(s.city || s.country)) return false
  if (s.spanDays >= 2) return true
  // A single day counts only if it's abroad (a real trip leg like Skopje).
  // Domestic one-day stays are day trips and are dropped.
  return s.country && s.country !== HOME_COUNTRY
})

// Merge consecutive stays in the same place. Once the single-day day trips are
// gone, two stints in the same city with only a gap between them (a filtered
// day trip, or notes I never tagged) are really one continuous stay.
const merged = []
for (const s of staysOut) {
  const prev = merged[merged.length - 1]
  if (prev && prev.city === s.city && prev.country === s.country) {
    prev.startDate = s.startDate < prev.startDate ? s.startDate : prev.startDate
    prev.endDate = s.endDate > prev.endDate ? s.endDate : prev.endDate
    prev.spanDays = dayspan(prev.startDate, prev.endDate)
    prev.noteDays += s.noteDays
  } else {
    merged.push({ ...s })
  }
}
merged.forEach((s, i) => (s.id = i))

const today = new Date().toISOString().slice(0, 10)
// The most recent stay is "ongoing" if its last note is within a week of now.
const latest = merged[merged.length - 1]
if (latest && dayspan(latest.endDate, today) <= 8) latest.ongoing = true

// Map dots: the areas that appear in at least one real stay, aggregated.
const stayedCities = new Set(merged.map((s) => s.city).filter(Boolean))
const mapPlaces = places.filter((p) => stayedCities.has(p.city))

const lat = days.map((d) => d.lat)
const lng = days.map((d) => d.lng)
const out = {
  generatedAt: today,
  totalDays: days.length,
  places: mapPlaces,
  stays: merged,
  bounds: {
    minLat: Math.min(...lat),
    maxLat: Math.max(...lat),
    minLng: Math.min(...lng),
    maxLng: Math.max(...lng),
  },
}

writeFileSync(OUT, JSON.stringify(out, null, 2))
console.log(`${days.length} located days -> ${mapPlaces.length} map places, ${merged.length} stays`)
console.log(
  merged
    .slice()
    .reverse()
    .map(
      (s) =>
        `  ${s.startDate}→${s.ongoing ? 'now' : s.endDate}  ${s.spanDays}d  ${s.city || '?'}${s.country ? ', ' + s.country : ''}`
    )
    .join('\n')
)
