// About.jsx
import React from 'react';
import { FlipWords } from './Flipword';

const About = () => {
  return (
    <div className="text-white  bg-black/50 p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-xl mx-auto transition duration-300 ease-in-out">
      <h1 className="text-xl md:text-2xl font-bold">
        Hi, I'm{' '}
        <span className="text-blue-400 text-2xl md:text-4xl">Shashi Raj</span>
        <br />
        A developer dedicated to crafting
        <div>
          <FlipWords
            words={["Secure", "Modern", "Scalable"]}
            className="font-black text-2xl md:text-4xl text-yellow-200"
          />
          web solutions
        </div>
      </h1>

      <div className="flex flex-col items-start pt-4 space-y-4">
        <p className="text-base md:text-lg leading-relaxed">
          A passionate frontend developer with a creative mind and a strong drive to
          turn ideas into beautiful and engaging web experiences. My journey has
          been fueled by curiosity and a deep desire to blend aesthetics with
          functionality.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          I love crafting interfaces that feel intuitive and look great. My toolbox
          includes HTML, CSS, JavaScript, React.js, and Tailwind CSS. I'm always
          exploring new ideas and pushing myself to stay updated. Whether it's 3D
          effects with Three.js, performance optimization, or responsive design, I
          thrive on bringing creativity and precision to every project.
        </p>
      </div>
    </div>
  );
};

export default About;
