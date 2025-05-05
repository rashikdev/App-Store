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
    <div className="bg-base-300 py-4 z-50 px-2 flex justify-between items-center font-bold sticky top-0">
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
            className="btn btn-secondary font-bold"
          >
            Logout
          </button>
        ) : (
          <NavLink className="btn btn-secondary font-bold" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
