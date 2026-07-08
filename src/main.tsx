import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home.tsx'
import Post from './Post.tsx'
import CV from './CV.tsx'
import Persian from './Persian.tsx'
import ScrollToTop from './ScrollToTop.tsx'
import './site.css'

// Handle GitHub Pages SPA redirect
const hash = window.location.hash
if (hash.startsWith('#!')) {
  const path = hash.slice(2)
  window.history.replaceState(null, '', path)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing/:slug" element={<Post />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/persian" element={<Persian />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
