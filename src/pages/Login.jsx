import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import MoreSignIn from "../components/MoreSignIn";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="md:my-20 mt-14 px-3 md:px-0">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-black text-white">
        <h1 className="text-2xl font-bold text-center">Login Your Account</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative">
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                id="password"
                required
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border"
              />
              <button
                onClick={() => setShow(!show)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              >
                {show ? <TbEyeClosed size={23} /> : <TbEye size={23} />}
              </button>
            </div>
            <div className="flex justify-end text-xs">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className=" btn btn-secondary block w-full p-3 text-center rounded-sm"
          >
            Login
          </button>
        </form>
        <MoreSignIn title={"Login With Google"}></MoreSignIn>
        <p className="text-xs md:text-[16px] text-center sm:px-6">
          Don't have an account?
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/register"
            rel="noopener noreferrer"
            href="#"
            className=" ml-2 underline text-secondary"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
