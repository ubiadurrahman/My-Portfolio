import React from "react";

const Projects = () => {
  const projects = [
    {
      src: "img_1.png",
      alt: "Daraz Clone",
      github: "https://github.com/ubiadurrahman/Draz---Clone.git",
    },
    {
      src: "img_2.png",
      alt: "Microsoft Clone",
      github: "https://github.com/ubiadurrahman/Microsoft-Clone.git",
    },
    {
      src: "img_3.png",
      alt: "Tic Tac Toe",
      github: "https://github.com/ubiadurrahman/Tic-Tac-Toe-Game.git",
    },
    {
      src: "img_4.png",
      alt: "Currency Converter",
      github: "https://github.com/ubiadurrahman/Currency-Converter.git",
    },
    {
      src: "img_5.png",
      alt: "Todo List",
      github: "https://github.com/ubiadurrahman/Todo_List.git",
    },
  ];

  return (
    <div className="w-screen bg-[#000000] bg-[radial-gradient(circle,#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white min-h-screen p-4 sm:p-6">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-purple-400">
        My Projects
      </h1>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.src}
              alt={project.alt}
              className="h-40 sm:h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{project.alt}</h2>
            {/* Button to GitHub */}
            <button
              onClick={() => window.open(project.github, "_blank")}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-400 transition"
            >
              View Code
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
