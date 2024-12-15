import React, { useState, useEffect } from "react";

const mockPolls = [
  {
    id: 1,
    question: "What's your favorite sport?",
    options: [
      { id: 1, text: "Football", votes: 10 },
      { id: 2, text: "Basketball", votes: 5 },
      { id: 3, text: "Tennis", votes: 3 },
    ],
  },
  {
    id: 2,
    question: "Which team will win the World Cup?",
    options: [
      { id: 1, text: "Argentina", votes: 8 },
      { id: 2, text: "France", votes: 6 },
      { id: 3, text: "Brazil", votes: 4 },
    ],
  },
];

const Polls = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voted, setVoted] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPolls(mockPolls); // Simulate fetching data
      setLoading(false);
    }, 1500); // Simulate a delay for loading
  }, []);

  const handleVote = (pollId, optionId) => {
    const updatedPolls = polls.map((poll) =>
      poll.id === pollId
        ? {
            ...poll,
            options: poll.options.map((option) =>
              option.id === optionId
                ? { ...option, votes: option.votes + 1 }
                : option
            ),
          }
        : poll
    );
    setPolls(updatedPolls);
    setVoted(pollId); // Mark the poll as voted
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-white mb-10">
        Sports Polls
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
        </div>
      ) : (
        polls.map((poll) => (
          <div
            key={poll.id}
            className="bg-gray-800 p-8 mb-8 rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-300"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)", // for Safari
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">{poll.question}</h2>
            <div className="space-y-4">
              {poll.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleVote(poll.id, option.id)}
                  disabled={voted === poll.id}
                  className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    voted === poll.id ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {poll.options.map((option) => {
                const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);
                const percentage = ((option.votes / totalVotes) * 100).toFixed(1);

                return (
                  <div key={option.id} className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-lg">{option.text}:</p>
                    <div className="w-3/4 bg-gray-600 rounded-full h-3 relative">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          transition: "width 0.5s ease-in-out",
                        }}
                      ></div>
                      <span className="absolute right-0 top-0 text-xs text-white">{percentage}%</span>
                    </div>
                    <span className="text-gray-400 text-lg ml-2">{option.votes} votes</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Polls;
