import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#08ffa4" size={60} speedMultiplier={2} />
    </div>
  );
};

export default LoadingPage;
