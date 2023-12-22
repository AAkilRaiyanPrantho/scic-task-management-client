import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Components/AuthProviders/AuthProvider.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Pages/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Main from './assets/Layouts/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
