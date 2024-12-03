import React from "react";

const Footer = () => (
  <footer className="bg-gray-950 text-slate-300 shadow-lg sticky text-center p-4 sm:p-6">
    <div className="space-y-2">
      <p className="hover:underline text-sm sm:text-base">
        © 2024 Ubaid ur Rahman. All rights reserved.
      </p>
      <p className="hover:underline text-sm sm:text-base">
        "Building the future, one line of code at a time."
      </p>
      <p className="hover:underline text-sm sm:text-base">
        Built with React.js and ❤️
      </p>
    </div>

    <button
      className="bg-gray-800 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 shadow-lg mt-4"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to Top
    </button>
  </footer>
);

export default Footer;
