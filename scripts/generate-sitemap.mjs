import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const SITE = 'https://patricklerner.com'
const postsDir = fileURLToPath(new URL('../src/posts', import.meta.url))
const outFile = fileURLToPath(new URL('../dist/sitemap.xml', import.meta.url))
const today = new Date().toISOString().slice(0, 10)

// Mirror the publish rule in src/posts.ts: only posts dated today or earlier.
function publishedPosts() {
  return readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = readFileSync(new URL(`../src/posts/${f}`, import.meta.url), 'utf8')
      const fm = raw.match(/^---\n([\s\S]*?)\n---/)
      const data = {}
      if (fm) {
        for (const line of fm[1].split('\n')) {
          const i = line.indexOf(':')
          if (i > -1) data[line.slice(0, i).trim()] = line.slice(i + 1).trim()
        }
      }
      const slug = f.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '')
      return { slug, date: data.date ?? '' }
    })
    .filter(p => p.date && p.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date))
}

const urls = [
  { loc: `${SITE}/`, lastmod: today },
  { loc: `${SITE}/writing`, lastmod: today },
  { loc: `${SITE}/cv`, lastmod: today },
  { loc: `${SITE}/persian`, lastmod: today },
  ...publishedPosts().map(p => ({ loc: `${SITE}/writing/${p.slug}`, lastmod: p.date })),
]

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n') +
  '\n</urlset>\n'

writeFileSync(outFile, xml)
console.log(`sitemap.xml written with ${urls.length} URLs`)
