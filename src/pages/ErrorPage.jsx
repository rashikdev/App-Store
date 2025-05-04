import React from "react";
import errorImg from "../assets/error.jpg";
import { Link } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <img className="w-[650px]" src={errorImg} alt="" />
      <h4 className="text-3xl font-semibold text-red-500">Page Not Found</h4>
      <Link className="btn btn-primary" to="/">
        <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
