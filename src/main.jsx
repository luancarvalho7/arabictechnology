import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Home } from './pages/home.jsx';
import { Tos } from './pages/tos/tos.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Privacidade } from './pages/tos/privacidade.jsx';
import { Delayed } from './pages/delayed/delayed.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Delayed/>
      },
      {
        path: "guiachatgpt",
        element: <Home/>
      },
      {
        path: "tos",
        element: <Tos />
      },
      {
        path: "privacidade",
        element: <Privacidade />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
