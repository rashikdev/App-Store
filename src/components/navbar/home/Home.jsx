import React from "react";
import Navbar from "../Navbar";
import { useLoaderData } from "react-router";
import AppsContainer from "../../AppsContainer";
import Slider from "../../Slider";
import { FaFire } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import management from "../../../assets/management.png";
import learning from "../../../assets/learning.png";
import TopRattedAppContainer from "../../TopRattedAppContainer";

const Home = () => {
  const appsData = useLoaderData();
  const trendingApp = appsData.filter((app) => app.trending === true);
  const productivityApp = appsData.filter(
    (app) => app.category === "Productivity"
  );
  const healthcareApp = appsData.filter((app) => app.category === "Health");
  const educationApp = appsData.filter((app) => app.category === "Education");

  const topRatedApp = appsData
    .filter((app) => app.rating >= 4.7)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="w-11/12 mx-auto space-y-10">
      <section>
        <Slider></Slider>
      </section>
      <div className="rounded md:p-5 p-3 space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-3">
          Trending Apps{" "}
          <span>
            <FaFire color="red"></FaFire>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {trendingApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div className="rounded md:p-5 p-3 space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-3">
          Productivity Apps{" "}
          <span>
            <img className="w-8" src={management} alt="" />
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {productivityApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div className="rounded md:p-5 p-3 space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-3">
          Healthcare Apps{" "}
          <span>
            <MdOutlineHealthAndSafety color="green" />
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {healthcareApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div className="rounded md:p-5 p-3 space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-3">
          Education Apps{" "}
          <span>
            <img className="w-6" src={learning} alt="" />
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {educationApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Top Rated Apps</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {topRatedApp.map((app) => (
            <TopRattedAppContainer
              key={app.id}
              app={app}
            ></TopRattedAppContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
