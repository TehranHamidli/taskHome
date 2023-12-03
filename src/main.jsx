import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/sehifeleme/Home.jsx";
import Category from "./components/sehifeleme/Category.jsx";
import About from "./components/sehifeleme/About.jsx";
import Service from "./components/sehifeleme/Service.jsx";
import Sehifeleme from "./components/sehifeleme/Sehifeleme.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sehifeleme />,

    children: [
  
      { index: true, element: <Home /> },
      { path: "about/", element: <About /> },
      { path: "category/", element: <Category /> },
      { path: "service/", element: <Service /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
