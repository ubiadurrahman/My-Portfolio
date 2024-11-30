
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="top-0 z-[-2]  w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 w-full max-w-5xl">
        {/* About Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start w-full md:w-2/3">
          {/* Profile Picture */}
          <div className="rounded-3xl overflow-hidden w-[300px] h-[150px] md:w-[400px] md:h-[250px] shadow-lg border-4 border-purple-600 mb-6">
            <img
              src="/profile.jpg"
              alt="Ubaid ur Rahman"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Bio */}
          <h2 className="text-base md:text-lg text-gray-300">
            <span className="text-2xl font-bold">Hi I’m</span>{" "}
            <strong className="text-2xl font-bold text-purple-400">
              Ubaid ur Rahman
            </strong>
            , a <strong className="text-2xl font-bold">React Developer</strong>{" "}
            who transforms ideas into seamless, interactive digital solutions,
            blending creativity and code to bring visions to life.
          </h2>

          {/* Skills Section (Mobile Priority) */}
          <div className="bg-[#1a2332] block md:hidden mt-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-full">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
                  C++
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
                  HTML & CSS
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
                  React.js
                </span>
              </div>
            </div>
          </div>

          {/* Other Content */}
          <h2 className="text-base md:text-lg font-bold mt-5">Interests</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Beyond coding, I enjoy blending art and technology—whether it’s
            crafting digital illustrations, refining UI designs, or finding
            inspiration in creative problem-solving.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-5">Fun Facts</h2>
          <p className="text-base md:text-lg text-gray-300">
            My Favorite Programming language is JavaScript
          </p>
          <p className="text-base md:text-lg text-gray-300">
            My First Project I built was an Amazon clone using HTML and CSS
          </p>

          <p className="text-lg md:text-xl font-bold mt-5">
            Want to learn more about me? Check out my{" "}
            <Link to="/projects">
              <span className="text-blue-600">projects</span>
            </Link>{" "}
          </p>
        </div>

        {/* Skills Section (Desktop Priority) */}
        <div className="hidden md:block bg-gray-800 rounded-lg p-6 shadow-lg flex-shrink-0 w-full md:w-1/3 md:self-start md:ml-6">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            My Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
              C++
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
              HTML & CSS
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition-all">
              React.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
