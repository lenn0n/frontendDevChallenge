import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import protectedRoutes from "./protected";
import publicRoutes from "./public";

import "bootstrap/dist/css/bootstrap.css"
import "@assets/css/style.css"

const routePaths = createBrowserRouter([
  ...protectedRoutes,
  ...publicRoutes
]) 

const Router = () => {
  return <RouterProvider router={routePaths} />
}

export default Router