import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.jsx";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import Facts from "./components/Facts.jsx";
import HomeCard1 from "./components/HomeCard1.jsx";
import Blog from "./components/Blog.jsx";
import HomeCard2 from "./components/HomeCard2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "healthy",
        element: <HomeCard1 />,
      },
      {
        path: "recipes",
        element: <HomeCard2 />
      },  
      {
        path: "facts",
        element: <Facts />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);