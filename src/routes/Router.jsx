import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts";
import Login from "../pages/Login";
import Home from "../components/navbar/home/Home";
import Register from "../pages/Register";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../components/LoadingPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
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
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  }
]);
