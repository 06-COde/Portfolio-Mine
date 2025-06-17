import { OrbitingCircles } from "./OrbitingCircles";


export function FrameWorks() {
    const skills = [
    "react",
    "tailwindcss",
    "javascript",
    "vite",
    "git",
    "github1",
    "nodejs",
    "expressjs",
    "css3",
    "gsap",
    "framermotion",
    "threejs",
    "docker",
  ];
  return (
    <div className="fixed z-20 top-24 right-10 h-[25rem] ">
      <OrbitingCircles iconSize={50}>
         {skills.map((skill, index) => (
          <Icon key={index} src={`/asset/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
         {skills.map((skill, index) => (
          <Icon key={index} src={`/asset/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <div className="rounded-full overflow-hidden w-full h-full flex items-center justify-center hover:scale-110 ">
    <img src={src} className="w-full h-full object-contain cursor-pointer" alt="logo" />
  </div>
);
