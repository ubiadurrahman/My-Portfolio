import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-purple-400">
              Ubaid's Portfolio
            </Link>
          </div>

          {/* Links (Hidden on Small Screens) */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `duration-200 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `duration-200 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : "text-white"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `duration-200 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : "text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `duration-200 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`text-gray-300 hover:text-white focus:outline-none transform transition-transform ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Blur Background */}
      <div
        className={`fixed inset-0 z-10 md:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Blur Background */}
        {isOpen && (
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div className="absolute top-0 left-0 h-screen w-3/4 bg-gray-800 shadow-lg">
          <div className="space-y-1 px-4 py-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-gray-700 text-purple-400"
                    : "hover:bg-gray-700 hover:text-purple-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-gray-700 text-purple-400"
                    : "hover:bg-gray-700 hover:text-purple-400"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-gray-700 text-purple-400"
                    : "hover:bg-gray-700 hover:text-purple-400"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-gray-700 text-purple-400"
                    : "hover:bg-gray-700 hover:text-purple-400"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
