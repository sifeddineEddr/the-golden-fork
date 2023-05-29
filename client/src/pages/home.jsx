import React from "react";
import NavBar from "../components/navBar";
import LandingImage from "../assets/images/landing-img.png";

export default function Home() {
  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat bg-image-url w-full h-[100vh] font-yellowtail"
      style={{ backgroundImage: `url(${LandingImage})` }}
    >
      <NavBar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 flex flex-col items-center md:gap-2">
        <p className="glow text-goldenYellow text-5xl md:text-7xl">
          The Golden Fork
        </p>
        <p className="text-white text-xl md:text-3xl">
          Elevating the Art of Dining
        </p>
      </div>
    </div>
  );
}