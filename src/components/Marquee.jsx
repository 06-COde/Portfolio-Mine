import React, { useEffect } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  useEffect(() => {
    const marquee1 = document.querySelector(".marquee-track1");
    const marquee2 = document.querySelector(".marquee-track2");

    const tl1 = gsap.to(marquee1, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

    const tl2 = gsap.to(marquee2, {
      xPercent: 50,
      repeat: -1,
      ease: "linear",
      duration: 25,
    });

    const pauseOnHover = (target, tl) => {
      target.addEventListener("mouseenter", () => tl.pause());
      target.addEventListener("mouseleave", () => tl.resume());
    };

    pauseOnHover(marquee1, tl1);
    pauseOnHover(marquee2, tl2);

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  const skillsRow1 = [
    "HTML5", "CSS3", "JAVASCRIPT", "REACTJS", "TAILWINDCSS", "REDUX", "NODEJS",
  ];
  const skillsRow2 = [
    "THREEJS", "GSAP", "FRAMER MOTION", "GIT", "GITHUB", "MONGODB", "EXPRESSJS"
  ];

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mt-12 overflow-hidden">
      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl uppercase pb-4 text-white">
        Selected Skills
      </h3>

      {/* Marquee 1 */}
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="marquee-track1 flex w-max space-x-4 sm:space-x-6">
          {[...skillsRow1, ...skillsRow1].map((tech, i) => (
            <span
              key={`row1-${i}`}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-white/10 text-xs sm:text-sm md:text-base cursor-pointer hover:bg-yellow-500/20 transition-colors whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee 2 */}
      <div className="relative w-full overflow-hidden whitespace-nowrap mt-4">
        <div className="marquee-track2 flex w-max space-x-4 sm:space-x-6">
          {[...skillsRow2, ...skillsRow2].map((tech, i) => (
            <span
              key={`row2-${i}`}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-white/10 text-xs sm:text-sm md:text-base cursor-pointer hover:bg-yellow-500/20 transition-colors whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
