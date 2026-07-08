import { marked } from 'marked'

export interface Post {
  slug: string
  title: string
  date: string
  theme?: string
  linkedin?: string
  excerpt: string
  html: string
}

marked.setOptions({ gfm: true, breaks: false })

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw.trim() }
  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':')
    if (i === -1) continue
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  return { data, body: match[2].trim() }
}

function makeExcerpt(body: string): string {
  const firstPara = body.split(/\n\s*\n/)[0].replace(/\s+/g, ' ').trim()
  if (firstPara.length <= 160) return firstPara
  return firstPara.slice(0, 157).replace(/\s+\S*$/, '') + '…'
}

const modules = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const today = new Date().toISOString().slice(0, 10)

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const fileSlug = path.replace(/^.*\/(\d{4}-\d{2}-\d{2}-)?/, '').replace(/\.md$/, '')
    return {
      slug: fileSlug,
      title: data.title ?? fileSlug,
      date: data.date ?? '',
      theme: data.theme,
      linkedin: data.linkedin,
      excerpt: makeExcerpt(body),
      html: marked.parse(body) as string,
    }
  })
  .filter((post) => post.date && post.date <= today)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${months[m - 1]} ${d}, ${y}`
}
