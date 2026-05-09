import { createBrowserRouter } from 'react-router-dom'

import { Contact } from '~/pages/contact'
import { Home } from '~/pages/home'
import { Projects } from '~/pages/projects'
import { Layout } from '~/layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> }
    ]
  }
])
