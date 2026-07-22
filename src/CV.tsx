import Layout from './Layout'
import Seo from './Seo'
import { socials } from './socials'

const roles = [
  {
    company: 'Instaffo GmbH',
    positions: [
      { years: '2025', title: 'Head of Engineering' },
      { years: '2019–2025', title: 'Platform Development Lead' },
      { years: '2017–2019', title: '(Co-)CTO' },
    ],
    blurb:
      'I grow and scale the engineering team and the platform. Everything user-facing is my responsibility, and I led the large architecture migration to Kubernetes, a TypeScript migration, and continuous Ruby on Rails upgrades. I hire, onboard and educate the team and keep things running, and I drive AI and agentic engineering forward. In recent years more strategic, but always hands-on.',
  },
  {
    company: 'launchwerk GmbH (defunct)',
    positions: [{ years: '2015–2017', title: 'Ruby on Rails Developer' }],
    blurb:
      'Started as a working student and soon went full-time. Most of my time (80–90%) went to Instaffo, our main client. The rest went to a short-lived mobile app and internal tools for managing Amazon and eBay product listings.',
  },
]

const skills = [
  { level: 'Love', label: 'Agentic Engineering, AI, Rust, Team Building' },
  { level: 'Strong', label: 'Ruby on Rails, React, TypeScript, k8s' },
  { level: 'Broad', label: 'Almost everything tech' },
]

const languages = [
  { level: 'Fluent', langs: 'German, English' },
  { level: 'Conversational', langs: 'Ukrainian, Russian' },
  { level: 'Some', langs: 'French, Persian, Turkish' },
]

export default function CV() {
  return (
    <Layout>
      <Seo
        title="CV · Patrick Lerner"
        description="Head of Engineering at Instaffo. I lead the platform team and build software and the teams that build it, with a focus on how AI changes the way we work."
        path="/cv"
      />
      <div className="wrap cv">
        <img
          className="cv-photo"
          src="/cv.webp"
          alt="Patrick Lerner in front of an Armenian sundial carving"
          loading="lazy"
        />
        <h1>Patrick Lerner</h1>
        <p className="cv-lede">
          Head of Engineering at Instaffo, a recruiting marketplace. I have led the platform team
          since 2017 and build software and the teams that build it. These days I spend most of my
          time on how AI changes the way we work.
        </p>
        <div className="intro-socials">
          {socials.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>

        <section className="cv-section">
          <h2>Experience</h2>
          {roles.map(role => (
            <div key={role.company} className="cv-role">
              <h3>{role.company}</h3>
              <ul>
                {role.positions.map(p => (
                  <li key={p.years + p.title}>
                    <span className="cv-years">{p.years}</span>
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>
              {role.blurb && <p className="cv-role-note">{role.blurb}</p>}
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <ul className="cv-plain">
            {skills.map(s => (
              <li key={s.label}>
                <span className="cv-level">{s.level}</span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2>Interests</h2>
          <p>Hiking, Culture, Art, History, Travel</p>
        </section>

        <section className="cv-section">
          <h2>Languages</h2>
          <ul className="cv-plain">
            {languages.map(l => (
              <li key={l.level}>
                <span className="cv-level">{l.level}</span>
                <span>{l.langs}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
