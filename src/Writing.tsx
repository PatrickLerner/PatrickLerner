import { Link } from 'react-router-dom'
import Layout from './Layout'
import Seo from './Seo'
import { posts, formatDate } from './posts'

export default function Writing() {
  return (
    <Layout>
      <Seo
        title="Writing · Patrick Lerner"
        description="Essays on AI in real engineering practice, by Patrick Lerner, Head of Engineering at Instaffo."
        path="/writing"
      />
      <div className="wrap writing-page">
        <h1>Writing</h1>
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`/writing/${post.slug}`} className="post-link">
                <span className="post-meta">{formatDate(post.date)}</span>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
