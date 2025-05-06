import React from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import GamesCard from "../components/GamesCard";

const Games = () => {
  const gamesData = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <Slider></Slider>
      <div>
        <h2 className="text-2xl font-semibold">Play your favorites</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
          {gamesData.map((game) => (
            <GamesCard key={game.id} game={game}></GamesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
