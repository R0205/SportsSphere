import React from "react";
import HeroImage from "../assets/Hero2.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-16 px-6 text-center relative overflow-hidden mb-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="mt-10 relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Welcome to SportSphere
        </h1>
        <p className="text-xl mb-6">
          Stay updated with live scores, trending matches, and connect with fans.
        </p>

        <div className="max-w-lg mx-auto mb-6">
          <input
            type="text"
            placeholder="Search for matches or teams"
            className="w-full p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
        </div>

        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-md text-lg font-bold transition-all duration-300 transform hover:scale-105">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
