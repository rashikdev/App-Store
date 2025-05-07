import React, { useState } from "react";

const GamesCard = ({ game }) => {
  const { name, thumbnail, image, rating, category } = game;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded-lg shadow-xl overflow-hidden bg-white cursor-pointer hover:scale-102 transition-all duration-400">
      <div className="w-full h-48 relative bg-gray-100 overflow-hidden flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="flex p-4 gap-3 items-start">
        <img
          src={thumbnail}
          alt={`${name} thumbnail`}
          className="w-14 h-14 object-cover rounded-lg"
        />

        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-gray-500 text-sm">{category}</p>
          <p className="text-gray-600 text-sm mt-1">⭐ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
