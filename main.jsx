import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/pages/App.jsx'
import { Corredor } from './src/pages/Corredor/corredor.jsx'
import { QuartoYuka } from './src/pages/Quarto03/quarto03.jsx'
import { QuartoBonas } from './src/pages/Quarto02/quarto02.jsx';
import { Entrada } from './src/pages/Entrada/entrada.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './src/Error/erro.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/entrada',
    element: <Entrada />,
  },
  {
    path: '/corredor',
    element: <Corredor />
  },
  {
    path: '/quartoyuka',
    element: <QuartoYuka />
  },
  {
    path: '/quartobonas',
    element: <QuartoBonas />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
