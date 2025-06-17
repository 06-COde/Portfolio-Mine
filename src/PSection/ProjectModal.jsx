import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ProjectModal = ({ toggleModalBtn, project }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={toggleModalBtn}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: "-20%" }}
        animate={{ opacity: 1, scale: 1, y: "0%" }}
        exit={{ opacity: 0, scale: 0.8, y: "-20%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-500 rounded-2xl p-6 w-[90%] max-w-xs text-white shadow-2xl"
      >
        <button
          onClick={toggleModalBtn}
          className="absolute top-3 right-3 text-slate-300 hover:text-yellow-400 transition"
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">
          Project Details
        </h3>

        {project ? (
          <>
            <p className="text-xs text-slate-200 mb-4 leading-relaxed text-center">
              {project.more_Info || "No additional info available."}
            </p>
            <a
              href={project.gitHub_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-yellow-400 font-semibold transition text-sm pb-2"
            >
              View on GitHub
            </a>
          </>
        ) : (
          <p className="text-xs text-slate-400 text-center">
            No project details available.
          </p>
        )}

        <button
          className="mt-4 block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg py-1 transition duration-200 text-sm"
          onClick={toggleModalBtn}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
