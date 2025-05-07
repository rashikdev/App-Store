import React from "react";
import { Outlet } from "react-router";
import Home from "../components/navbar/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import DynamicTitle from "../pages/DynamicTitle";

const Layouts = () => {
  return (
    <div>
      <DynamicTitle></DynamicTitle>
      <Navbar></Navbar>
      <main className="mb-20">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layouts;
