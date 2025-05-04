import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();
  const singleApp = data.find((app) => app.id === id);
  const {
    name,
    thumbnail,
    rating,
    downloads,
    banner,
    category,
    description,
    features,
    reviews,
    developer,
  } = singleApp;
  return (
    <div className="rounded-xl shadow-lg p-6 mt-5 space-y-4 bg-white">
      {/* Banner */}
      <img
        src={banner}
        alt={`${name} banner`}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* App Info */}
      <div className="flex gap-4 items-center">
        <img
          src={thumbnail}
          alt={`${name} thumbnail`}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">by {developer}</p>
          <p className="text-sm text-gray-600 mt-1">
            Category: <span className="font-medium">{category}</span>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-700">
        <p>⭐ {rating} rating</p>
        <p>⬇️ {downloads.toLocaleString()} downloads</p>
      </div>

      {/* Description */}
      <div>
        <h3 className="font-semibold text-lg">Description</h3>
        <p className="text-gray-800">{description}</p>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-lg">Features</h3>
        <ul className="list-disc pl-6 text-gray-800">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div>
        <h3 className="font-semibold text-lg">Reviews</h3>
        <div className="space-y-2">
          {reviews.map((review, idx) => (
            <div key={idx} className="border p-3 rounded bg-gray-50">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{review.user}</span>: ⭐{" "}
                {review.rating}
              </p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Install Button */}
      <button
        onClick={() => setInstalled((prv) => !prv)}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-100 cursor-pointer"
      >
        {installed ? "Uninstall" : "Install"}
      </button>
    </div>
  );
};

export default AppDetails;
