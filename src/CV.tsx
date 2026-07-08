import { useEffect } from 'react'
import Layout from './Layout'

const roles = [
  {
    company: 'Instaffo GmbH',
    positions: [
      { years: '2025', title: 'Head of Engineering' },
      { years: '2019–2025', title: 'Platform Development Lead' },
      { years: '2017–2019', title: '(Co-)CTO' },
    ],
  },
  {
    company: 'launchwerk GmbH (defunct)',
    positions: [{ years: '2015–2017', title: 'Ruby on Rails Developer' }],
  },
]

const skills = [
  { level: 'Love', label: 'Rust, Engineering, Team Building' },
  { level: 'Strong', label: 'Ruby on Rails, React, TypeScript, AI, k8s' },
  { level: 'Broad', label: 'Almost everything tech' },
]

const languages = [
  { level: 'Fluent', langs: 'German, English' },
  { level: 'Conversational', langs: 'Ukrainian, Russian' },
  { level: 'Some', langs: 'French, Persian, Turkish' },
]

export default function CV() {
  useEffect(() => {
    document.title = 'CV · Patrick Lerner'
    return () => {
      document.title = 'Patrick Lerner'
    }
  }, [])

  return (
    <Layout>
      <div className="wrap cv">
        <h1>Patrick Lerner</h1>
        <p className="cv-lede">
          Head of Engineering at Instaffo, a recruiting marketplace. I have led the platform team
          since 2017 and build software and the teams that build it. These days I spend most of my
          time on how AI changes the way we work.
        </p>

        <section className="cv-section">
          <h2>Experience</h2>
          {roles.map((role) => (
            <div key={role.company} className="cv-role">
              <h3>{role.company}</h3>
              <ul>
                {role.positions.map((p) => (
                  <li key={p.years + p.title}>
                    <span className="cv-years">{p.years}</span>
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <ul className="cv-plain">
            {skills.map((s) => (
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
            {languages.map((l) => (
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
