import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '~/layout'
import { Page } from '~/components/page'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Page path='/' /> },
      { path: '/projects', element: <Page path='/projects' /> },
      { path: '/contact', element: <Page path='/contact' /> }
    ]
  }
])
