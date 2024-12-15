import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation and scroll to top
  const handleNavigationClick = (path) => {
    if (location.pathname === path) {
      // Same page: scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page: navigate and scroll to top
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0); // Ensure scroll happens after navigation
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-8 mt-16">
      <div className="container mx-auto px-6 md:px-16">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Live Sports Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-yellow-500">Live Sports & Fan Engagement</h2>
            <p className="text-sm text-gray-300">
              Stay updated with live scores, polls, and sports forums. Connect with fellow fans and engage with real-time sports updates.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-2xl hover:text-yellow-400 transition-colors">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-2xl hover:text-yellow-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-2xl hover:text-yellow-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-2xl hover:text-yellow-400 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-yellow-500">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleNavigationClick("/about")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("/contact")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("/privacy")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("/terms")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Fan Engagement Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-yellow-500">Fan Engagement</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleNavigationClick("/polls")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  Polls
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("/forums")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  Forums
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("/live-scores")}
                  className="text-sm hover:text-yellow-400 transition-colors"
                >
                  Live Scores
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-yellow-500">Stay Connected</h3>
            <p className="text-sm text-gray-300">
              Subscribe for the latest sports updates and fan news.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-md border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
            />
            <button className="bg-yellow-500 text-black px-6 py-2 mt-3 rounded-md w-full hover:bg-yellow-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Live Sports Updates & Fan Engagement Platform. All rights reserved.
          </p>
          <div className="mt-3">
            <button
              onClick={() => handleNavigationClick("/privacy")}
              className="text-sm text-gray-400 hover:text-yellow-400"
            >
              Privacy Policy
            </button>
            {" | "}
            <button
              onClick={() => handleNavigationClick("/terms")}
              className="text-sm text-gray-400 hover:text-yellow-400"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
