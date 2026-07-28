import { Navigate } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import Root from './Root'
import Home from './Home'
import Writing from './Writing'
import Post from './Post'
import CV from './CV'
import Persian from './Persian'
import Impressum from './Impressum'
import { posts } from './posts'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home />, entry: 'src/Home.tsx' },
      { path: 'writing', element: <Writing />, entry: 'src/Writing.tsx' },
      {
        path: 'writing/:slug',
        element: <Post />,
        entry: 'src/Post.tsx',
        getStaticPaths: () => posts.map(p => `writing/${p.slug}`),
      },
      { path: 'cv', element: <CV />, entry: 'src/CV.tsx' },
      { path: 'persian', element: <Persian />, entry: 'src/Persian.tsx' },
      { path: 'impressum', element: <Impressum />, entry: 'src/Impressum.tsx' },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]
