import React, { useState, useEffect } from "react";

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data
  useEffect(() => {
    const dummyData = [
      {
        team1: "Team A",
        team2: "Team B",
        score1: "120/3",
        score2: "115/5",
        status: "Ongoing",
        time: "5 overs left",
        venue: "Stadium 1",
      },
      {
        team1: "Team C",
        team2: "Team D",
        score1: "150/7",
        score2: "140/8",
        status: "Completed",
        time: "Match Ended",
        venue: "Stadium 2",
      },
      {
        team1: "Team E",
        team2: "Team F",
        score1: "80/2",
        score2: "78/4",
        status: "Ongoing",
        time: "10 overs left",
        venue: "Stadium 3",
      },
    ];

    setTimeout(() => {
      setMatches(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400 mx-auto"></div>
          <p className="mt-4">Fetching live scores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gradient bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500">
        Live Cricket Scores
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold mb-2">
              {match.team1} <span className="text-yellow-500">vs</span>{" "}
              {match.team2}
            </h2>
            <p className="text-sm text-gray-400 mb-2">{match.venue}</p>
            <div className="flex justify-between items-center">
              <p>
                <span className="font-semibold">Score:</span> {match.score1} -{" "}
                {match.score2}
              </p>
              <p className="text-sm text-gray-500">{match.time}</p>
            </div>
            <p
              className={`mt-4 text-center font-bold ${
                match.status === "Ongoing"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {match.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScores;
