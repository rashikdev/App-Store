import React from "react";
import { Outlet } from "react-router";
import Home from "../components/navbar/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import DynamicTitle from "../pages/DynamicTitle";
import { MdArrowDropUp } from "react-icons/md";

const Layouts = () => {
  return (
    <div>
      <DynamicTitle></DynamicTitle>
      <Navbar></Navbar>
      <main className="mb-20">
        <Outlet></Outlet>
      </main>
      <button
        onClick={() => window.scrollTo({ top: 0,behavior: "smooth" })}
        className="fixed bottom-4 right-2 z-50 p-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <MdArrowDropUp size={32} color="white" />
      </button>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layouts;
