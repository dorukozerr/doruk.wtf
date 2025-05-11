import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '~/layout';
import { Home } from '~/pages/home';
import { Projects } from '~/pages/projects';
import { Contact } from '~/pages/contact';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> }
    ]
  }
]);
