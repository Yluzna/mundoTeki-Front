import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
/* import App from './App.jsx' */
import './index.css'
import { router } from './router/routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
