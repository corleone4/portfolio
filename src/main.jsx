import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import "../src/assets/app.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home /> ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
