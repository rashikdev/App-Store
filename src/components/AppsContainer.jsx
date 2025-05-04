import React from "react";

const AppsContainer = ({ app }) => {
  const { name, thumbnail, rating, downloads } = app;
  // console.log(app)
  return (
    <div className="rounded flex gap-5 border p-4">
      <img src={thumbnail} alt={name} className="md:w-20 w-18 rounded" />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p>Rating : {rating} <span>⭐</span></p>
        <p>{downloads}</p>
      </div>
    </div>
  );
};

export default AppsContainer;
