import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  return (
    <div className="  top-0 z-[-2]  w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Top Content: Image */}
      <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 shadow-lg border-4 border-purple-600 mb-6">
        <img
          src="/profile.jpg"
          alt="Ubaid ur Rahman"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Content: Text and Buttons */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Hello, I'm <span className="text-purple-400">Ubaid ur Rahman</span> 👋
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-gray-300">
          A Frontend Developer passionate about crafting modern web experiences.
        </h2>
        <div className="cta-buttons space-x-4">
          <button
            onClick={() => navigate("/projects")} // Navigate to the Projects page
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => navigate("/contact")} // Add a contact route if needed
            className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;