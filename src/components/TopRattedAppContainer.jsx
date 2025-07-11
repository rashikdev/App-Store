import React from "react";
import { Link } from "react-router";

const TopRattedAppContainer = ({ app }) => {
  const { thumbnail, name, rating, id } = app;
  return (
    <Link
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      to={`/app/${id}`}
    >
      <section className="mt-8 max-w-[200px]">
        <div className="rounded-lg shadow-md p-4 flex flex-col gap-2 justify-center items-center hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <img
            src={thumbnail}
            alt={name}
            className="md:w-30 w-20 rounded-4xl border-2 border-gray-200"
          />
          <div className="md:w-7/9">
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">Rating: {rating} ⭐</p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default TopRattedAppContainer;
