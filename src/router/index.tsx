import { createBrowserRouter, Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: (
      <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-5xl font-extrabold text-pink-500'>Temp Layout</h1>
        <Outlet />
      </div>
    ),
    children: [
      { path: '/', element: <h1>Home Page</h1> },
      { path: '/portfolio', element: <h1>Portfolio Page</h1> }
    ]
  }
]);
