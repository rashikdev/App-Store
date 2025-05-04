import React from "react";
import { Outlet } from "react-router";
import Home from "../components/navbar/home/Home";
import Navbar from "../components/navbar/Navbar";

const Layouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layouts;
