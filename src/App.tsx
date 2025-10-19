import { useEffect, useState } from 'react'
import './App.css'

const asciiArt = `
██████   █████  ████████ ██████  ██  ██████ ██   ██
██   ██ ██   ██    ██    ██   ██ ██ ██      ██  ██
██████  ███████    ██    ██████  ██ ██      █████
██      ██   ██    ██    ██   ██ ██ ██      ██  ██
██      ██   ██    ██    ██   ██ ██  ██████ ██   ██
`

const terminalContent = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'Patrick Lerner' },
  { type: 'command', text: 'cat cv.md' },
  {
    type: 'output',
    text: '- Instaffo GmbH\n  - 2025      Head of Engineering\n  - 2019-2025 Platform Development Lead\n  - 2017-2019 (Co-)CTO\n- launchwerk GmbH (defunct)\n  - 2015-2017 Ruby on Rails Developer',
  },
  { type: 'command', text: 'cat skills.md' },
  {
    type: 'output',
    text: '- Professional:\n  - ♥ Rust, Engineering, Team Building\n  - ▲ Ruby on Rails, React, TypeScript, AI, k8s\n  - ★ Almost everything tech\n- Interests: Hiking, Culture, Art, History, Travel\n- Languages:\n  - Fluent: German, English\n  - Conversational: Ukrainian, Russian\n  - Some: French, Persian, Turkish',
  },
  { type: 'command', text: 'ls links/' },
  { type: 'links', text: '' },
]

function App() {
  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0)
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0)

  useEffect(() => {
    if (currentLineIndex < terminalContent.length) {
      const currentLine = terminalContent[currentLineIndex]

      if (currentLine.type === 'command') {
        if (currentCharIndex < currentLine.text.length) {
          const timer = setTimeout(() => {
            setCurrentCharIndex(currentCharIndex + 1)
          }, 50)
          return () => clearTimeout(timer)
        } else {
          const timer = setTimeout(() => {
            setDisplayedLines(currentLineIndex + 1)
            setCurrentLineIndex(currentLineIndex + 1)
            setCurrentCharIndex(0)
          }, 300)
          return () => clearTimeout(timer)
        }
      } else {
        setDisplayedLines(currentLineIndex + 1)
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }
  }, [currentLineIndex, currentCharIndex])

  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
          <span className="terminal-title">patrick@wopr: ~</span>
        </div>
        <div className="terminal-body">
          <pre className="ascii-art" style={{ color: '#8fbcbb' }}>
            {asciiArt}
          </pre>

          {terminalContent.map((line, index) => {
            if (index > displayedLines) return null

            if (line.type === 'command') {
              const displayText =
                index === currentLineIndex ? line.text.slice(0, currentCharIndex) : line.text

              return (
                <div key={index} className="terminal-line command">
                  <span className="prompt">$</span>
                  <span className="command">
                    {displayText}
                    {index === currentLineIndex && currentCharIndex < line.text.length && (
                      <span className="typing-cursor"></span>
                    )}
                  </span>
                </div>
              )
            } else if (line.type === 'output') {
              return index <= displayedLines ? (
                <div key={index} className="terminal-line">
                  <span className="output" style={{ whiteSpace: 'pre-wrap' }}>
                    {line.text}
                  </span>
                </div>
              ) : null
            } else if (line.type === 'links') {
              return index <= displayedLines ? (
                <div key={index} className="terminal-line">
                  <div className="links">
                    <a
                      href="https://linkedin.com/in/patricklerner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      linkedin.com
                    </a>
                    <a
                      href="https://github.com/patricklerner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      github.com
                    </a>
                    <a
                      href="https://instagram.com/ptlerner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      instagram.com
                    </a>
                    <a
                      href="https://t.me/ptlerner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      t.me
                    </a>
                  </div>
                </div>
              ) : null
            }

            return null
          })}

          {currentLineIndex >= terminalContent.length && (
            <div className="terminal-line command">
              <span className="prompt">$</span>
              <span className="typing-cursor"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
