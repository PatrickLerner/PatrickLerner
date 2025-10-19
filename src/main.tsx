import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import Persian from './Persian.tsx'

// Handle GitHub Pages SPA redirect
const hash = window.location.hash
if (hash.startsWith('#!')) {
  const path = hash.slice(2)
  window.history.replaceState(null, '', path)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/persian" element={<Persian />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
