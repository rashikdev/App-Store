import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "./LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (!user) {
    return <Navigate to="/register" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
