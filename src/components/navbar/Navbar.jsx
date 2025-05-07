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
      {/* nav items  */}
      <div className="flex items-center gap-1">
        <div className="dropdown md:hidden block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 py-4 shadow space-y-3"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 underline underline-offset-4" : ""
              }
              to="/"
            >
              Apps
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 underline underline-offset-4" : ""
              }
              to="/games"
            >
              Games
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 underline underline-offset-4" : ""
              }
              to="/profile"
            >
              MyProfile
            </NavLink>
          </ul>
        </div>
        <NavLink className="flex items-center" to="/">
          <img className="md:w-10 w-8 rounded-full" src={logo} alt="" />
          <h2 className="font-bold text-2xl ml-2 ">App Store</h2>
        </NavLink>
      </div>
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
              : "md:bg-pink-200 text-black"
          } px-3 py-1 md:px-6 md:py-2 rounded-2xl hidden md:block`
        }
      >
        <h2 className="">Apps</h2>
      </NavLink>
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
        to="/games"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
              : "md:bg-pink-200 text-black"
          } px-3 py-1 md:px-6 md:py-2 rounded-2xl hidden md:block`
        }
      >
        <h2 className="">Games</h2>
      </NavLink>
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
              : "md:bg-pink-200 text-black"
          } px-3 py-1 md:px-6 md:py-2 rounded-2xl hidden md:block`
        }
        to="/profile"
      >
        MyProfile
      </NavLink>
      {/* nav items  end*/}

      <div className="flex items-center gap-3 md:gap-4">
        <img
          title={user?.email}
          className="md:w-10 md:h-10 w-8 h-8 cursor-pointer rounded-full border-2 border-gray-300"
          // src={user?.photoURL || userLogo}
          src={`${
            user ? (user.photoURL ? user.photoURL : userLogo) : userLogo
          }`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="md:px-3 py-1 md:py-2 px-2 bg-[crimson] text-white font-bold rounded-full text-[14px] md:text-[16px]"
          >
            Logout
          </button>
        ) : (
          <NavLink
            onClick={() => window.scrollTo(0, 0)}
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
