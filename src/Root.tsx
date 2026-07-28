import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Analytics from './Analytics'

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Outlet />
    </>
  )
}
