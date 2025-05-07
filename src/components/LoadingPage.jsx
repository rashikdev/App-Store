import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
