import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    goatcounter?: { count: (vars?: { path?: string }) => void }
  }
}

// count.js loads async and auto-counting is disabled (no_onload), so we fire
// every pageview manually here — including the first — to catch SPA navigation.
export default function Analytics() {
  const { pathname } = useLocation()
  useEffect(() => {
    let tries = 0
    const send = () => {
      if (window.goatcounter?.count) {
        window.goatcounter.count({ path: pathname })
      } else if (tries++ < 20) {
        setTimeout(send, 100)
      }
    }
    send()
  }, [pathname])
  return null
}
