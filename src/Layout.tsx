import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { socials } from './socials'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <nav className="nav">
            <Link to="/writing">Writing</Link>
            <Link to="/cv">CV</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Patrick Lerner</span>
          <span className="links">
            <Link to="/impressum">Legal & Privacy</Link>
            {socials.map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </>
  )
}
