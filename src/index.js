import React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Payments from "./pages/payments/Payments";
import Conditions from "./pages/conditions/Conditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/fizetes-es-szallitasi-modok",
    element: <Payments />
  },
  {
    path: "/altalanos-szerzodesi-feltetelek",
    element: <Conditions />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
