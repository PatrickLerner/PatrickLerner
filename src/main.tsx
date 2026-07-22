import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './site.css'

export const createRoot = ViteReactSSG({ routes })
