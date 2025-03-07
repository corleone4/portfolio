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

import "../src/assets/app.css";
import Aos from 'aos';

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home /> ),
  },
  {
    path: "projects",
    element: <SobreMim />,
  },
  {
    path: "about-me",
    element: <SobreMim />,
  },
  {
    path: "contact",
    element: <Contato />,
  },
]);
Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />  
    <RouterProvider router={router} />

  </StrictMode>,
)
