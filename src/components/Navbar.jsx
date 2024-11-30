import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="#" className="text-2xl font-bold text-purple-400">
              Ubaid's Portfolio
            </Link>
          </div>

          {/* Links (Hidden on Small Screens) */}
          <div className="hidden md:flex space-x-10">
            <NavLink to="/" //className="hover:text-purple-400 transition">
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"
                } border-b border-gray-600 hover: text-purple-400 transition hover:bg-transparent lg:border-0 lg:p-0`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"
                } border-b border-gray-600 hover: text-purple-400 transition hover:bg-transparent lg:border-0 lg:p-0`
              }
            >
              Projects
            </NavLink>
            <NavLink to="/about"  className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"
                } border-b border-gray-600 hover: text-purple-400 transition hover:bg-transparent lg:border-0 lg:p-0`
              }
            >
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"
                } border-b border-gray-600 hover: text-purple-400 transition hover:bg-transparent lg:border-0 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink to="/" className= "hover:text-purple-400 transition">
              Home
            </NavLink>
            <Link
              to="/projects"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
