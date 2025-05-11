import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '~/layout';
import { Home } from '~/pages/home';
import { Portfolio } from '~/pages/portfolio';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> }
    ]
  }
]);
