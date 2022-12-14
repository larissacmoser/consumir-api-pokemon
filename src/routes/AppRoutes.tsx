import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
