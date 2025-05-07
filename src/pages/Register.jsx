import React, { use, useState } from "react";
import { FaEye, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import MoreSignIn from "../components/MoreSignIn";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const Register = () => {
  const { createUser, updateUser, setUser, user } = use(AuthContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo_url = form.photo_url.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: photo_url,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo_url });
            toast.success("Register Successfully");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-20">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-black text-white">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
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
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              >
                {show ? <TbEyeClosed size={23} /> : <TbEye size={23} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className=" btn btn-secondary block w-full p-3 text-center rounded-sm"
          >
            Register
          </button>
        </form>
        <MoreSignIn title={"Continue with Google"}></MoreSignIn>
        <p className="text-xs md:text-[16px] text-center sm:px-6">
          Already have an account?
          <Link
            onClick={() => window.scrollTo(0, 0)}
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
