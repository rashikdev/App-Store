import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts";
import Login from "../pages/Login";
import Home from "../components/navbar/home/Home";
import Register from "../pages/Register";
import AppDetails from "../pages/AppDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
    ],
  },
]);
