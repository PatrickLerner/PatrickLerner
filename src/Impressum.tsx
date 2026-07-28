import Layout from './Layout'
import Seo from './Seo'

export default function Impressum() {
  return (
    <Layout>
      <Seo
        title="Legal Notice & Privacy · Patrick Lerner"
        description="Legal notice (Impressum) and privacy policy for patricklerner.com."
        path="/impressum"
        noindex
      />
      <article className="wrap article">
        <header className="article-header">
          <h1>Legal Notice & Privacy</h1>
        </header>

        <div className="prose">
          <p>Information pursuant to § 5 DDG</p>
          <p>
            Patrick Lerner
            <br />
            3/22 11th, Aygestan Street
            <br />
            Yerevan, Armenia
          </p>

          <h2>Contact</h2>
          <p>
            Email: ptlerner [at] gmail [dot] com
            <br />
            Telegram: <a href="https://t.me/ptlerner">@ptlerner</a>
          </p>

          <h2>Responsible for the content</h2>
          <p>Patrick Lerner (address as above)</p>

          <h2>Hosting</h2>
          <p>
            This site is hosted on GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
            Francisco, CA 94107, USA). When you visit the site, GitHub processes technically
            necessary access data (including IP address, date and time, page requested, browser
            type). The legal basis is the legitimate interest in providing the site securely and
            reliably (Art. 6(1)(f) GDPR).
          </p>

          <h2>Analytics (GoatCounter)</h2>
          <p>
            Traffic is measured with GoatCounter. GoatCounter works without cookies and without a
            persistent identifier. No personal profiles are built; IP addresses are not stored
            permanently and are used only transiently to count unique visits. What is recorded is
            essentially the page visited, the referrer, a coarse origin (country), and the browser
            and device type. The legal basis is the legitimate interest in privacy-friendly traffic
            measurement (Art. 6(1)(f) GDPR).
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access, rectification, erasure, restriction of processing, data
            portability, and to object to processing. You also have the right to lodge a complaint
            with a data protection supervisory authority.
          </p>
        </div>
      </article>
    </Layout>
  )
}
