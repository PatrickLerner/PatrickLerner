import { Link } from 'react-router-dom'
import Layout from './Layout'
import { posts, formatDate } from './posts'
import { socials } from './socials'

export default function Home() {
  return (
    <Layout>
      <div className="wrap">
        <section className="intro">
          <h1>Patrick Lerner</h1>
          <p>Head of Engineering at Instaffo. I build software and the teams that build it.</p>
          <p>
            I write about AI in real engineering practice: what actually works, what breaks, and
            how the way we build is changing. Mostly things I have seen or built myself.
          </p>
          <div className="intro-socials">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </section>

        <p className="section-label">Writing</p>
        <ul className="post-list">
          {posts.map((post) => (
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
