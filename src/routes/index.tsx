import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import Category from "../pages/Category";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/:categorySlug", element: <Category /> },
      { path: "/product/:slug", element: <Product /> },
    ],
  },
]);
