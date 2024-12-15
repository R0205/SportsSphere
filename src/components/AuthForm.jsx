// src/components/AuthForm.js
import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="bg-white rounded-xl p-8 shadow-lg w-full sm:w-96 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="w-full p-3 mb-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        <div
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-center text-indigo-600 cursor-pointer hover:underline"
        >
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
