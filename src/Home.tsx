import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from './Seo'
import { posts, formatDate } from './posts'
import { socials } from './socials'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Patrick Lerner',
  jobTitle: 'Head of Engineering',
  worksFor: { '@type': 'Organization', name: 'Instaffo' },
  url: 'https://patricklerner.com',
  sameAs: socials.map(s => s.href),
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        const vh = window.innerHeight
        const p = Math.min(y / (vh * 0.8), 1)
        const root = document.documentElement.style
        root.setProperty('--dark', String(0.38 + p * 0.52))
        root.setProperty('--cue-opacity', String(Math.max(0, 1 - y / 100)))
        setScrolled(y > vh * 0.55)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      document.documentElement.style.removeProperty('--dark')
      document.documentElement.style.removeProperty('--cue-opacity')
    }
  }, [])

  return (
    <div className="hero-page">
      <Seo
        title="Patrick Lerner"
        description="Head of Engineering at Instaffo. I write about AI in real engineering practice."
        path="/"
        jsonLd={personJsonLd}
      />
      <header className={`hero-header${scrolled ? ' is-scrolled' : ''}`}>
        <Link to="/" className="hero-brand">
          Patrick Lerner
        </Link>
        <nav className="hero-nav">
          <Link to="/writing">Writing</Link>
          <Link to="/cv">CV</Link>
        </nav>
      </header>

      <section className="hero">
        <h1 className="hero-title">Patrick Lerner</h1>
        <p className="hero-tagline">
          Head of Engineering at Instaffo. I write about AI in real engineering practice.
        </p>
        <div className="hero-actions">
          <a
            href="#writing"
            className="hero-btn"
            onClick={e => {
              e.preventDefault()
              document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Writing
          </a>
          <Link to="/cv" className="hero-btn">
            CV
          </Link>
        </div>
        <span className="hero-cue">
          Scroll <span aria-hidden="true">↓</span>
        </span>
      </section>

      <main className="hero-main" id="writing">
        <div className="wrap">
          <p className="section-label">Writing</p>
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

        <footer className="hero-footer">
          <div className="wrap">
            <span>© {new Date().getFullYear()} Patrick Lerner</span>
            <span className="links">
              {socials.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </span>
          </div>
        </footer>
      </main>
    </div>
  )
}
