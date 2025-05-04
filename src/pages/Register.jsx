import React from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="my-20">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-black text-white">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border"
            />
          </div>
          <button
            type="submit"
            className=" btn btn-secondary block w-full p-3 text-center rounded-sm"
          >
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm">Register with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <FaGoogle size={20}></FaGoogle>
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <FaTwitter size={20}></FaTwitter>
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub size={20}></FaGithub>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className=" ml-2 underline text-secondary"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
