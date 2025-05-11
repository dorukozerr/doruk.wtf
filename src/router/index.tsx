import { createBrowserRouter, Outlet } from 'react-router-dom';

import { Layout } from '~/layout';

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: '/', element: <h1>Home Page</h1> },
      { path: '/portfolio', element: <h1>Portfolio Page</h1> }
    ]
  }
]);
