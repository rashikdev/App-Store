import React from "react";

const GamesCard = ({ game }) => {
  const { name, thumbnail, image, rating, category } = game;
  return (
    <div className="max-w-md rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-center" />
      </div>

      {/* Bottom Details Section */}
      <div className="flex p-4 gap-3 items-start">
        {/* Game Thumbnail */}
        <img
          src={thumbnail}
          alt={`${name} thumbnail`}
          className="w-14 h-14 object-cover rounded-lg"
        />

        {/* Info */}
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
