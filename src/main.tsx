import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Settings from './components/Settings';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/settings',
    element: <Settings />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
