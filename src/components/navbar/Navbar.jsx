import React, { use } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import userLogo from "../../assets/user.png";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    toast.error("Logout Successfully");
    logOut();
  };
  return (
    <div className="bg-base-300 py-4 z-50 px-2 flex justify-between items-center shadow-md font-bold sticky top-0">
      <div>
        <NavLink className="flex items-center" to="/">
          <img className="w-7 rounded-full" src={logo} alt="" />
          <h2 className="font-bold text-2xl hidden md:block ml-2 ">
            App Store
          </h2>
        </NavLink>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-orange-500 to-pink-600 px-3 py-1 md:px-6 md:py-2 text-white rounded-2xl"
            : ""
        }
      >
        <h2 className="">Apps</h2>
      </NavLink>
      <NavLink
        to="/games"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-orange-500 to-pink-600 px-3 py-1 md:px-6 md:py-2 text-white rounded-2xl"
            : ""
        }
      >
        <h2 className="">Games</h2>
      </NavLink>
      <NavLink to="/profile">MyProfile</NavLink>
      <div className="flex items-center gap-4">
        <img
          title={user?.email}
          className="w-10 cursor-pointer rounded-full border-2 border-gray-300"
          src={`${
            user ? (user.photoURL ? user.photoURL : userLogo) : userLogo
          }`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="md:px-3 py-1 md:py-2 px-2 bg-red-700 text-white font-bold rounded-full"
          >
            Logout
          </button>
        ) : (
          <NavLink
            className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-full"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
