import React, { useState } from "react";

// Simulated mock data
const mockThreads = [
  {
    id: 1,
    title: "Best training exercises for football?",
    replies: ["Sprint drills", "Strength training", "Endurance runs"],
    isFavorite: false,
  },
  {
    id: 2,
    title: "How to improve basketball shooting accuracy?",
    replies: ["Practice free throws", "Use a shooting coach", "Repetition is key"],
    isFavorite: false,
  },
];

const Forums = () => {
  const [threads, setThreads] = useState(mockThreads);
  const [newThread, setNewThread] = useState("");
  const [newReply, setNewReply] = useState({});
  const [showReplies, setShowReplies] = useState({});
  const [loadingThread, setLoadingThread] = useState(false);
  const [loadingReply, setLoadingReply] = useState(false);
  const [loadingThreads, setLoadingThreads] = useState(false); // For loading threads

  // Add new thread
  const addThread = () => {
    if (newThread) {
      setLoadingThread(true);
      setTimeout(() => {
        setThreads((prevThreads) => [
          ...prevThreads,
          { id: prevThreads.length + 1, title: newThread, replies: [], isFavorite: false },
        ]);
        setNewThread("");
        setLoadingThread(false);
      }, 1000);
    }
  };

  // Handle change for reply input (per thread)
  const handleReplyChange = (threadId, value) => {
    setNewReply((prev) => ({
      ...prev,
      [threadId]: value,
    }));
  };

  // Add reply to a specific thread
  const addReply = (threadId) => {
    if (newReply[threadId]) {
      setLoadingReply(true);
      setTimeout(() => {
        setThreads((prevThreads) =>
          prevThreads.map((thread) =>
            thread.id === threadId
              ? { ...thread, replies: [...thread.replies, newReply[threadId]] }
              : thread
          )
        );
        setNewReply((prev) => ({ ...prev, [threadId]: "" }));
        setLoadingReply(false);
      }, 1000);
    }
  };

  // Toggle favorite for a thread
  const toggleFavorite = (threadId) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === threadId
          ? { ...thread, isFavorite: !thread.isFavorite }
          : thread
      )
    );
  };

  // Toggle visibility of replies for a specific thread
  const toggleReplies = (threadId) => {
    setShowReplies((prev) => ({ ...prev, [threadId]: !prev[threadId] }));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10">Sports Forums</h1>
      <div className="mb-6 max-w-lg mx-auto">
        <input
          type="text"
          value={newThread}
          onChange={(e) => setNewThread(e.target.value)}
          className="border p-3 rounded-lg w-full mb-2 bg-gray-700 text-gray-100 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          placeholder="Start a new thread..."
          maxLength={100}
        />
        <button
          onClick={addThread}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-6 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all"
        >
          {loadingThread ? "Adding Thread..." : "Add Thread"}
        </button>
      </div>

      {/* Loading Spinner for Threads */}
      {loadingThreads || loadingThread || loadingReply ? (
        <div className="flex justify-center items-center space-x-2">
          <div className="animate-spin rounded-full border-4 border-t-4 border-teal-600 border-solid w-8 h-8"></div>
          <span className="text-white">Loading...</span>
        </div>
      ) : (
        threads.length > 0 ? (
          threads.map((thread) => (
            <div key={thread.id} className="bg-gray-800 p-6 mb-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-teal-400 hover:text-teal-500 transition-all">
                  {thread.title}{" "}
                  <span className="text-sm text-gray-400">({thread.replies.length} replies)</span>
                </h2>
                <button
                  onClick={() => toggleFavorite(thread.id)}
                  className={`text-sm py-1 px-3 rounded-lg ${thread.isFavorite ? "bg-yellow-500 text-gray-900" : "bg-gray-700"} hover:bg-yellow-600`}
                >
                  {thread.isFavorite ? "Unfavorite" : "Favorite"}
                </button>
              </div>
              <button
                onClick={() => toggleReplies(thread.id)}
                className="mt-4 text-sm text-blue-400 hover:underline"
              >
                {showReplies[thread.id] ? "Hide Replies" : "Show Replies"}
              </button>
              {showReplies[thread.id] && (
                <ul className="mt-4 pl-6 list-disc space-y-2 text-gray-300">
                  {thread.replies.length > 0 ? (
                    thread.replies.map((reply, index) => <li key={index}>{reply}</li>)
                  ) : (
                    <li className="italic">No replies yet</li>
                  )}
                </ul>
              )}
              <div className="mt-4">
                <input
                  type="text"
                  value={newReply[thread.id] || ""}
                  onChange={(e) => handleReplyChange(thread.id, e.target.value)}
                  className="border p-2 rounded-lg w-full mb-2 bg-gray-700 text-gray-100 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Add a reply..."
                  maxLength={200}
                />
                <button
                  onClick={() => addReply(thread.id)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all"
                >
                  {loadingReply ? "Replying..." : "Reply"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No threads to display. Start a new thread!</p>
        )
      )}
    </div>
  );
};

export default Forums;
