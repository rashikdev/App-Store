import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts";
import Login from "../pages/Login";
import Home from "../components/navbar/home/Home";
import Register from "../pages/Register";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import PrivateRoute from "../components/PrivateRoute";
import Games from "../pages/Games";

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
        path: "/games",
        element: <Games></Games>,
        loader: () => fetch("/gamesData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/app/:id",
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
