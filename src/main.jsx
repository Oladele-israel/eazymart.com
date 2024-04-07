import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layouts/Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import MultiProductPage from "./pages/multiProductpage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterUser from "./pages/registerUser.jsx";
import SingleProductPage from "./pages/product-page.jsx";
import UserAccount from "./pages/userAccount.jsx";

/*creating the browser router */
const router = createBrowserRouter([
  {
    path: "/", // First definition of path
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <MultiProductPage />,
      },
      {
        path: "user",
        element: <UserAccount />,
      },
      {
        path: "product",
        element: <SingleProductPage />,
      },
      {
        path: "register",
        element: <RegisterUser />,
      },
      // {
      //   path: "product/:productId",
      //   element: <ProductRoute />,
      // },
    ],
  },
  // the login and the signup routes are outside the layout
  {
    path: "login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
