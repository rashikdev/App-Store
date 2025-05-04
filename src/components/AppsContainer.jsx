import React from "react";
import { Link } from "react-router";

const AppsContainer = ({ app }) => {
  const { name, thumbnail, rating, downloads, id } = app;
  // console.log(app)
  return (
    <Link to={`/app/${id}`}>
      <div className="rounded flex gap-5 border p-4">
        <img src={thumbnail} alt={name} className="md:w-20 w-18 rounded" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p>
            Rating : {rating} <span>⭐</span>
          </p>
          <p>Downloads : {downloads}</p>
        </div>
      </div>
    </Link>
  );
};

export default AppsContainer;
