import React from "react";
import { Link } from "react-router";

const AppsContainer = ({ app }) => {
  const { name, thumbnail, rating, downloads, id } = app;
  return (
    <Link to={`/app/${id}`}>
      <div className="rounded-md flex gap-5 p-4 shadow-2xl border-1 border-gray-200 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
        <img src={thumbnail} alt={name} className="md:w-20 w-18 rounded" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="">
            Rating : {rating} <span>⭐</span>
          </p>
          <p>Downloads : {downloads}</p>
        </div>
      </div>
    </Link>
  );
};

export default AppsContainer;
