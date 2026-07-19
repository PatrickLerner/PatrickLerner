import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from './Layout'
import { getPost, formatDate } from './posts'

export default function Post() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  useEffect(() => {
    if (post) document.title = `${post.title} · Patrick Lerner`
    return () => {
      document.title = 'Patrick Lerner'
    }
  }, [post])

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

  return (
    <Layout>
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
