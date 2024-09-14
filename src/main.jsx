import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './template/Header.jsx';
import Footer from './template/Footer.jsx';
import * as React from "react";
import './custom.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SobreMim from './pages/SobreMim.jsx';
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
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
