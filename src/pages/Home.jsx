import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SportsCarousel from "../components/SportsCarousel";
import { FaBasketballBall, FaFutbol } from "react-icons/fa"; // Importing valid icons

const Home = () => {
  // State for countdown and loading
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const matchDate = new Date("2024-12-20T00:00:00"); // Match date
      const now = new Date();
      const diff = matchDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setLoading(false); // Stop loading once the match date is reached
      } else {
        setTimeRemaining(diff);
      }
    }, 1000);

    // Simulating loading data or fetching process
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds (for demo)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      <Hero />
      <SportsCarousel />
      <section className="p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <h2 className="text-4xl font-extrabold text-center mb-8">Trending Matches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="w-full bg-gray-700 rounded-lg shadow-xl p-6 hover:scale-105 transition-all duration-500 transform hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <FaBasketballBall className="text-4xl text-yellow-400" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">Match 1: Team A vs Team B</h3>
            </div>
            <p className="text-gray-400 mb-4">Date: 20th December</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-all duration-300">
              View Details
            </button>
          </div>

          <div className="w-full bg-gray-700 rounded-lg shadow-xl p-6 hover:scale-105 transition-all duration-500 transform hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <FaBasketballBall className="text-4xl text-yellow-400" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">Match 2: Team C vs Team D</h3>
            </div>
            <p className="text-gray-400 mb-4">Date: 20th December</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-all duration-300">
              View Details
            </button>
          </div>

          <div className="w-full bg-gray-700 rounded-lg shadow-xl p-6 hover:scale-105 transition-all duration-500 transform hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <FaBasketballBall className="text-4xl text-yellow-400" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">Match 3: Team D vs Team B</h3>
            </div>
            <p className="text-gray-400 mb-4">Date: 20th December</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-all duration-300">
              View Details
            </button>
          </div>

          <div className="w-full bg-gray-700 rounded-lg shadow-xl p-6 hover:scale-105 transition-all duration-500 transform hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <FaFutbol className="text-4xl text-green-400" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">Match 4: Team C vs Team D</h3>
            </div>
            <p className="text-gray-400 mb-4">Date: 21st December</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-all duration-300">
              View Details
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            timeRemaining ? (
              <p className="text-lg font-semibold">
                Next Match in:{" "}
                <span className="text-yellow-400">{formatTime(timeRemaining)}</span>
              </p>
            ) : (
              <p className="text-lg text-green-400 font-semibold">Match is live now!</p>
            )
          )}
        </div>

        <p className="text-center text-lg mt-6 font-semibold">
          Coming soon: Live updates for ongoing matches.
        </p>
      </section>
    </>
  );
};

export default Home;
