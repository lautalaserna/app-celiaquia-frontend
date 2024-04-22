import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Welcome from './routes/Welcome/Welcome';
import Login from './routes/Login/Login';
import Auth from './routes/Auth/Auth';
import Home from './routes/Home/Home';
import { AuthProvider } from './auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/',
    element: <Auth/>,
    children: [
      {
        path: '/home',
        element: <Home/> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
