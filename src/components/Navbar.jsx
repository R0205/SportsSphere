import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBullhorn, FaGamepad, FaUsers, FaUserCircle, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu after clicking a menu item
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 text-white flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
        SportSphere
      </h1>

      {/* Hamburger icon for mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        <FaBars className="text-3xl" />
      </button>

      {/* Menu Links for Desktop */}
      <div className="md:flex gap-8 hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-yellow-300 transition-all duration-300" : "hover:text-yellow-300 transition-all duration-300"
          }
        >
          <FaHome className="inline-block mr-2" />
          Home
        </NavLink>
        <NavLink
          to="/live-scores"
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-yellow-300 transition-all duration-300" : "hover:text-yellow-300 transition-all duration-300"
          }
        >
          <FaGamepad className="inline-block mr-2" />
          Live Scores
        </NavLink>
        <NavLink
          to="/polls"
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-yellow-300 transition-all duration-300" : "hover:text-yellow-300 transition-all duration-300"
          }
        >
          <FaBullhorn className="inline-block mr-2" />
          Polls
        </NavLink>
        <NavLink
          to="/forums"
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-yellow-300 transition-all duration-300" : "hover:text-yellow-300 transition-all duration-300"
          }
        >
          <FaUsers className="inline-block mr-2" />
          Forums
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-yellow-300 transition-all duration-300" : "hover:text-yellow-300 transition-all duration-300"
          }
        >
          <FaUserCircle className="inline-block mr-2" />
          Profile
        </NavLink>
      </div>

      {/* Mobile Menu - Sliding and Fading Effect */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-50 md:hidden transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className={`flex flex-col items-center justify-center space-y-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
          <NavLink
            to="/"
            onClick={closeMenu} // Close the menu on click
            className={({ isActive }) =>
              isActive ? "font-bold text-white hover:text-yellow-300 transition-all duration-300" : "text-white hover:text-yellow-300 transition-all duration-300"
            }
          >
            <FaHome className="inline-block mr-2" />
            Home
          </NavLink>
          <NavLink
            to="/live-scores"
            onClick={closeMenu} // Close the menu on click
            className={({ isActive }) =>
              isActive ? "font-bold text-white hover:text-yellow-300 transition-all duration-300" : "text-white hover:text-yellow-300 transition-all duration-300"
            }
          >
            <FaGamepad className="inline-block mr-2" />
            Live Scores
          </NavLink>
          <NavLink
            to="/polls"
            onClick={closeMenu} // Close the menu on click
            className={({ isActive }) =>
              isActive ? "font-bold text-white hover:text-yellow-300 transition-all duration-300" : "text-white hover:text-yellow-300 transition-all duration-300"
            }
          >
            <FaBullhorn className="inline-block mr-2" />
            Polls
          </NavLink>
          <NavLink
            to="/forums"
            onClick={closeMenu} // Close the menu on click
            className={({ isActive }) =>
              isActive ? "font-bold text-white hover:text-yellow-300 transition-all duration-300" : "text-white hover:text-yellow-300 transition-all duration-300"
            }
          >
            <FaUsers className="inline-block mr-2" />
            Forums
          </NavLink>
          <NavLink
            to="/profile"
            onClick={closeMenu} // Close the menu on click
            className={({ isActive }) =>
              isActive ? "font-bold text-white hover:text-yellow-300 transition-all duration-300" : "text-white hover:text-yellow-300 transition-all duration-300"
            }
          >
            <FaUserCircle className="inline-block mr-2" />
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
