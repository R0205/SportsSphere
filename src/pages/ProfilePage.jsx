import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    sport: "Football",
  });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show loading spinner
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  if (loading) {
    return (
      <div className="relative p-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-900/60 to-black/70 backdrop-blur-lg"></div>
        <div className="relative bg-gray-800/70 p-6 rounded-lg shadow-2xl max-w-md w-full border border-gray-700">
          {/* Loading Spinner */}
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-900/60 to-black/70 backdrop-blur-lg"></div>
      <div className="relative bg-gray-800/70 p-6 rounded-lg shadow-2xl max-w-md w-full border border-gray-700">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-600 shadow-md transition-all transform hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-pulse"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-200 mb-6">
          Profile
        </h1>
        {editMode ? (
          <>
            <input
              name="name"
              value={profile.name}
              onChange={handleEdit}
              className="border bg-gray-700 text-gray-200 p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-purple-500 hover:shadow-lg transition-all"
              placeholder="Name"
            />
            <input
              name="email"
              value={profile.email}
              onChange={handleEdit}
              className="border bg-gray-700 text-gray-200 p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-purple-500 hover:shadow-lg transition-all"
              placeholder="Email"
            />
            <input
              name="sport"
              value={profile.sport}
              onChange={handleEdit}
              className="border bg-gray-700 text-gray-200 p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-purple-500 hover:shadow-lg transition-all"
              placeholder="Favorite Sport"
            />
            <button
              onClick={() => setEditMode(false)}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-lg w-full hover:from-green-600 hover:to-teal-600 shadow-lg transition-all transform hover:scale-105"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="text-center text-gray-300 space-y-4">
              <p className="text-lg">
                <strong>Name:</strong> {profile.name}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {profile.email}
              </p>
              <p className="text-lg">
                <strong>Favorite Sport:</strong> {profile.sport}
              </p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg w-full mt-6 hover:from-blue-600 hover:to-indigo-600 shadow-lg transition-all transform hover:scale-105"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
