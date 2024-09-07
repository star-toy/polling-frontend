import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout';
import MainPage from './pages/main-page';
import PostDetailPage from './pages/post-detail-page';
import PostCreatePage from './pages/post-create-page';
import NotFoundPage from './components/pages/not-found-page';
import '../app/globals.css';
import { ROUTES } from './constants/routes';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.MAIN, element: <MainPage /> },
      {
        path: ROUTES.POST_DETAIL,
        element: <PostDetailPage />,
      },
      {
        path: ROUTES.POST_CREATE,
        element: <PostCreatePage />,
      },
      { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
