import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './template/Header.jsx';
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SobreMim from './pages/SobreMim.jsx';
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';

import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/vendors/font-awesome/css/font-awesome.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home /> ),
  },
  {
    path: "sobremim",
    element: <SobreMim />,
  },
  {
    path: "contato",
    element: <Contato />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />  
    <RouterProvider router={router} />

  </StrictMode>,
)
