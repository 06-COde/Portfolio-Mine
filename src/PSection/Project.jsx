import React from "react";
import ProjectCard from "./ProjectCard";
import Graph from "../GSection/Graph";

const Project = () => {
  return (
    <>
    <div className="min-h-screen bg-transparent flex flex-col items-center py-5">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 animate-pulse ">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        <ProjectCard/>
      </div>
    </div>
    <div className="h-screen w-full shadow-xl bg-gradient-to-t bg-gray-500 ">
       <Graph/>
    </div>
    </>
  );
};

export default Project;
