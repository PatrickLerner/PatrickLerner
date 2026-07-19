import { useEffect } from 'react'
import Layout from './Layout'
import world from './world.geo.json'
import travels from './travels.json'

type Ring = [number, number][]
const polygons = world as unknown as Ring[][]

interface Place {
  id: number
  city: string
  country: string
  lat: number
  lng: number
  days: number
}
interface Stay {
  id: number
  city: string
  country: string
  lat: number
  lng: number
  startDate: string
  endDate: string
  spanDays: number
  noteDays: number
  ongoing?: boolean
}
const data = travels as unknown as {
  totalDays: number
  places: Place[]
  stays: Stay[]
  bounds: { minLat: number; maxLat: number; minLng: number; maxLng: number }
}

// Equirectangular projection, longitude compressed by cos(centre latitude).
const { minLat, maxLat, minLng, maxLng } = data.bounds
const centerLat = (minLat + maxLat) / 2
const k = Math.cos((centerLat * Math.PI) / 180)
const X = (lng: number) => lng * k
const Y = (lat: number) => -lat

const padLng = Math.max(4, (maxLng - minLng) * 0.28)
const padLat = Math.max(3, (maxLat - minLat) * 0.28)
const vbMinX = X(minLng - padLng)
const vbMinY = Y(maxLat + padLat)
const vbW = X(maxLng + padLng) - vbMinX
const vbH = Y(minLat - padLat) - vbMinY

const inView = (ring: Ring) => {
  let west = 180,
    east = -180,
    south = 90,
    north = -90
  for (const [lng, lat] of ring) {
    if (lng < west) west = lng
    if (lng > east) east = lng
    if (lat < south) south = lat
    if (lat > north) north = lat
  }
  return (
    east >= minLng - padLng &&
    west <= maxLng + padLng &&
    north >= minLat - padLat &&
    south <= maxLat + padLat
  )
}

const landPaths: string[] = []
for (const poly of polygons) {
  for (const ring of poly) {
    if (!inView(ring)) continue
    landPaths.push(
      'M' + ring.map(([lng, lat]) => `${X(lng).toFixed(2)} ${Y(lat).toFixed(2)}`).join('L') + 'Z'
    )
  }
}

const dotR = (days: number) => 0.35 + Math.sqrt(days) * 0.13
const cities = new Set(data.places.map((p) => p.city).filter(Boolean))
const countries = new Set(data.places.map((p) => p.country).filter(Boolean))
const feed = [...data.stays].sort((a, b) => b.startDate.localeCompare(a.startDate))

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const part = (d: number) => (d <= 10 ? 'early' : d <= 20 ? 'mid' : 'late')
function fmtRange(a: string, b: string, ongoing?: boolean) {
  const [ay, am, ad] = a.split('-').map(Number)
  const start = `${part(ad)} ${MONTHS[am - 1]}`
  if (ongoing) return `${start} ${ay} – now`
  const [by, bm, bd] = b.split('-').map(Number)
  const startStr = ay !== by ? `${start} ${ay}` : start
  const end = `${part(bd)} ${MONTHS[bm - 1]} ${by}`
  return `${startStr} – ${end}`
}
function fmtDuration(days: number, ongoing?: boolean) {
  let base: string
  if (days < 14) base = `${days} days`
  else if (days < 60) {
    const w = Math.round(days / 7)
    base = `${w} week${w === 1 ? '' : 's'}`
  } else {
    const m = Math.round(days / 30.44)
    base = `${m} month${m === 1 ? '' : 's'}`
  }
  return ongoing ? `${base} and counting` : base
}

export default function Travels() {
  useEffect(() => {
    document.title = 'Travels · Patrick Lerner'
    return () => {
      document.title = 'Patrick Lerner'
    }
  }, [])

  return (
    <Layout>
      <div className="wrap travels">
        <h1>Travels</h1>
        <p className="cv-lede">
          {data.stays.length} stays across {cities.size} cities and {countries.size} countries,
          pieced together from the location tags in my daily notes. Day trips left out.
        </p>

        <div className="map-frame">
          <svg
            viewBox={`${vbMinX.toFixed(2)} ${vbMinY.toFixed(2)} ${vbW.toFixed(2)} ${vbH.toFixed(2)}`}
            role="img"
            aria-label="Map of places stayed"
          >
            <g className="land">
              {landPaths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
            {data.places.map((p) => (
              <circle key={p.id} className="place" cx={X(p.lng)} cy={Y(p.lat)} r={dotR(p.days)}>
                <title>
                  {p.city}
                  {p.country ? `, ${p.country}` : ''}
                </title>
              </circle>
            ))}
          </svg>
        </div>

        <ol className="stay-feed">
          {feed.map((s) => (
            <li key={s.id}>
              <span className="post-meta">{fmtRange(s.startDate, s.endDate, s.ongoing)}</span>
              <h2 className="stay-title">
                {s.city}
                {s.country ? <span className="stay-country">, {s.country}</span> : null}
              </h2>
              <span className="stay-dur">{fmtDuration(s.spanDays, s.ongoing)}</span>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}
