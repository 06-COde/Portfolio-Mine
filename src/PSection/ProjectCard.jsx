import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ProjectModal from "./ProjectModal";
import { project_Data_URL } from "../utils/constants";
import Shimmer from "../components/Shimmer";

const ProjectCard = () => {
  const [modal, setModal] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const data = await fetch(project_Data_URL);
    const json = await data.json();
    console.log(json);
    setProjects(json);
    setLoading(false); 
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const toggleModalBtn = (projectId) => {
    if (modal === projectId) {
      setModal(null);
    } else {
      setModal(projectId);
    }
  };

   if (loading) return <Shimmer />;
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-slate-800 bg-opacity-50 border border-slate-600 rounded-xl text-white shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300 flex flex-col"
          >
            <div className="h-40 overflow-hidden rounded-t-xl">
              <img
                className="w-full h-full object-contain pt-2"
                src={project.img_URL || "./asset/logos/image1.png"}
                alt="project logo"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow gap-2">
              <h2 className="font-bold text-2xl text-yellow-400">{project.name}</h2>
              <div className="flex-1 relative">
                <p className="text-sm text-slate-300 max-h-16 overflow-y-auto pr-2">
                  {project.description || "No description available."}
                </p>
                <style>
                  {`
                    p::-webkit-scrollbar {
                      width: 4px;
                    }
                    p::-webkit-scrollbar-thumb {
                      background-color: rgba(255, 255, 255, 0.3);
                      border-radius: 2px;
                    }
                  `}
                </style>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-semibold bg-slate-700 rounded-full px-2 py-1">
                  Tools: {project.tools_Used?.join(", ") || "N/A"}
                </span>
                <button
                  onClick={() => toggleModalBtn(project._id)}
                  className="text-yellow-400 hover:text-yellow-300 transition"
                >
                  <FontAwesomeIcon className="text-xl" icon={faCircleInfo} />
                </button>
              </div>
            </div>

            {modal === project._id && (
              <ProjectModal
                toggleModalBtn={() => toggleModalBtn(project._id)}
                project={project} // ✅ pass project as a prop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
