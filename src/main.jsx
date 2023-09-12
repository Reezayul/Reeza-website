import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from './Contact.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import { AppProvider } from './Context.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <AppProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
