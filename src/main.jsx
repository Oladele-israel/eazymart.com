import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layouts/Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import About from "./pages/about.jsx";
import ProductRoute from "./pages/product-page.jsx";
import MultiProductPage from "./pages/multiProductpage.jsx";

/*creating the browser router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   index: true,
      //   element: <HomePage />,
      // },
      // {
      //   path: "about",
      //   element: <About />,
      // },
      {
        path: "products",
        element: <MultiProductPage/>,
      },
      // {
      //   path: "product/:productId",
      //   element: <ProductRoute />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
