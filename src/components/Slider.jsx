import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import focusPro from "../assets/focus-pro.png";
import healthMate from "../assets/healthMate.jpg";
import learnify from "../assets/learnify.jpg";

const Slider = () => {
  const appData = [
    {
      id: 1,
      name: "Focus Pro",
      description: "Boost productivity with smart task management.",
      image: focusPro,
      category: "Productivity",
    },
    {
      id: 2,
      name: "HealthMate",
      description: "Track your fitness and stay healthy every day.",
      image: healthMate,
      category: "Health",
    },
    {
      id: 3,
      name: "Learnify",
      description: "Fun and engaging way to learn new skills.",
      image: learnify,
      category: "Education",
    },
  ];
  return (
    <div className="w-full md:w-10/12 mx-auto my-10">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={4000}
      >
        {appData.map((app) => (
          <div
            key={app.id}
            className="relative bg-gray-100 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 mb-3 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">{app.name}</h2>
              <p className="text-sm md:text-lg">{app.description}</p>
              <span className="text-xs mt-1 italic">
                Category: {app.category}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
