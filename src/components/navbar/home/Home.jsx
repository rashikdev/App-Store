import React from "react";
import Navbar from "../Navbar";
import { useLoaderData } from "react-router";
import AppsContainer from "../../AppsContainer";

const Home = () => {
  const appsData = useLoaderData();
  // console.log(appsData);
  const trendingApp = appsData.filter((app) => app.trending === true);
  const productivityApp = appsData.filter(
    (app) => app.category === "Productivity"
  );
  const healthcareApp = appsData.filter((app) => app.category === "Health");
  const educationApp = appsData.filter((app) => app.category === "Education");

  return (
    <div className="w-11/12 mx-auto space-y-10">
      <section>
        <h2>Slider with 3 image</h2>
      </section>
      <div className="border-2 rounded border-gray-300 p-3 space-y-4">
        <h2 className="text-2xl font-semibold">Trending Apps</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {trendingApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div className="border-2 rounded border-gray-300 p-3 space-y-4">
        <h2 className="text-2xl font-semibold">Productivity Apps</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {productivityApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div className="border-2 rounded border-gray-300 p-3 space-y-4">
        <h2 className="text-2xl font-semibold">Healthcare Apps</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {healthcareApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      <div className="border-2 rounded border-gray-300 p-3 space-y-4">
        <h2 className="text-2xl font-semibold">Education Apps</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {educationApp.map((app) => (
            <AppsContainer key={app.id} app={app}></AppsContainer>
          ))}
        </div>
      </div>
      {/* <AppsContainer trendingApp={trendingApp} title="Trending Apps"></AppsContainer>
      <AppsContainer productivityApp={productivityApp} title="Productivity Apps"></AppsContainer>
      <AppsContainer healthcareApp={healthcareApp} title="Healthcare Apps"></AppsContainer>
      <AppsContainer educationApp={educationApp} title="Education Apps"></AppsContainer> */}
    </div>
  );
};

export default Home;
