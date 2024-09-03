import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import MainPage from './pages/main-page';
import '../app/globals.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: '/', element: <MainPage /> }],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
