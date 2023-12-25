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
import SignUp from './assets/Pages/SignUp/SignUp';
import SignIn from './assets/Pages/SignIn/SignIn';
import PrivateRoute from './Routes/PrivateRoute';
import Dashboard from './assets/Layouts/Dashboard';
import CreateTasks from './assets/Pages/CreateTasks/CreateTasks';
import AllTasks from './assets/Pages/AllTasks/AllTasks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'createTask',
        element: <PrivateRoute><CreateTasks></CreateTasks> </PrivateRoute>
      },
      {
        path: 'allTasks',
        element: <PrivateRoute><AllTasks></AllTasks></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
