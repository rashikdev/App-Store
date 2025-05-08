import React, { useEffect } from "react";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    let title = "AppStore";
    if (path === "/") {
      title = "Home";
    } else if (path === "/login") {
      title = "Login";
    } else if (path === "/register") {
      title = "Register";
    } else if (path === "/profile") {
      title = "Profile";
    } else if (path === "/games") {
      title = "Games";
    } else if (path.startsWith("/app/")) {
      title = "App Details";
    }
    
    document.title = `AppStore - ${title}`;
  }, [location]);
  return null;
};

export default DynamicTitle;
