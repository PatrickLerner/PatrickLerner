import { Head } from 'vite-react-ssg'

const SITE = 'https://patricklerner.com'
const DEFAULT_IMAGE = '/hero-landscape.webp'

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  jsonLd?: Record<string, unknown>
  noindex?: boolean
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  jsonLd,
  noindex = false,
}: SeoProps) {
  const url = `${SITE}${path}`
  const img = image.startsWith('http') ? image : `${SITE}${image}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Patrick Lerner" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {type === 'article' && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === 'article' ? <meta property="article:author" content="Patrick Lerner" /> : null}

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Head>
  )
}
