import { Link, useParams } from 'react-router-dom'
import Layout from './Layout'
import Seo from './Seo'
import { getPost, formatDate } from './posts'

export default function Post() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <Layout>
        <div className="wrap">
          <div className="not-found">
            <p>That post does not exist.</p>
            <Link to="/writing">Back to writing</Link>
          </div>
        </div>
      </Layout>
    )
  }

  const path = `/writing/${post.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://patricklerner.com${path}`,
    mainEntityOfPage: `https://patricklerner.com${path}`,
    author: { '@type': 'Person', name: 'Patrick Lerner', url: 'https://patricklerner.com' },
    publisher: { '@type': 'Person', name: 'Patrick Lerner' },
  }

  return (
    <Layout>
      <Seo
        title={`${post.title} · Patrick Lerner`}
        description={post.excerpt}
        path={path}
        type="article"
        publishedTime={post.date}
        jsonLd={jsonLd}
      />
      <article className="wrap article">
        <Link to="/writing" className="back">
          <span aria-hidden="true">←</span> Writing
        </Link>
        <header className="article-header">
          <span className="post-meta">{formatDate(post.date)}</span>
          <h1>{post.title}</h1>
        </header>
        {/* Trusted: post HTML is generated from our own committed markdown. */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.linkedin && (
          <div className="article-footer">
            Originally posted on{' '}
            <a href={post.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </div>
        )}
      </article>
    </Layout>
  )
}
