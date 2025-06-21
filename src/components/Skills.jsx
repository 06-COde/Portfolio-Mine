import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import BarMenu from "./BarMenu";
import { FrameWorks } from "./FrameWorks";
import Marquee from "./Marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Project from "../PSection/Project";

const Skills = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [newPage, setNewPage] = useState(false); 

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const toggleProjectPage = () => {
  setNewPage((prev) => (prev === "project" ? null : "project"));
  };


  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas style={{ pointerEvents: "none" }}>
          <Stars
            radius={100}
            depth={50}
            count={1500}
            factor={4}
            saturation={0}
            fade={true}
            speed={2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* BarMenu */}
        <div className="fixed right-4 z-30">
          <BarMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        </div>

        <button
             onClick={toggleProjectPage}
             className="p-2 mt-5 bg-red-600 text-white rounded-lg border hover:border-white flex items-center gap-2"
         >
             {newPage === "project" ? (
         <>
            Back <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
         </>
          ) : (
            "Projects"
          )}
        </button>

        {/* Tech Stack Card */}
        {!newPage && (
          <div className="pl-10 pt-10 w-full flex flex-col">
            <div className="border border-white rounded-lg shadow-lg p-4 w-[40%] bg-black/30 backdrop-blur-md">
              <h1 className="font-extrabold w-full md:w-[60%]
              cursor-pointer text-5xl text-yellow-400 hover:animate-pulse">
                Tech Stack
              </h1>
              <p className="pt-4 font-medium">
                From sleek static pages to dynamic, interactive apps, my journey
                has been fueled by React, Tailwind CSS, and a passion for beautiful,
                responsive design. Adding a splash of GSAP and Three.js magic, I’ve
                turned ideas into vibrant, 3D-infused experiences — always crafting
                web solutions that are as delightful as they are fast.
              </p>
            </div>
            <Marquee />
          </div>
        )}

        {/* FrameWorks Orbiting Icons */}
        {!newPage && (
          <div className="relative z-10 pt-10">
            <FrameWorks />
          </div>
        )}

        {/* New Project Page */}
        {newPage && (
          <div className="pt-20 text-3xl font-bold text-green-400">
              <Project/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
