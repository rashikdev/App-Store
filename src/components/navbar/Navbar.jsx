import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-base-300 py-4 px-2 flex justify-between items-center font-bold sticky top-0">
      <div>
        <NavLink className="flex items-center" to="/">
          <img className="w-7 rounded-full" src={logo} alt="" />
          <h2 className="font-bold text-2xl ml-2">App Store</h2>
        </NavLink>
      </div>
      <NavLink>
        <h2 className=" md:px-6 md:py-2 px-2 bg-accent rounded-xl">Apps</h2>
      </NavLink>
      <NavLink to="/profile">MyProfile</NavLink>
      <NavLink className="btn btn-secondary font-bold" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
