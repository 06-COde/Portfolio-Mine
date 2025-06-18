import React from 'react';
import '../utils/title.css';
import Menulist from './Menulist';

const Title = () => {
  const frontendText = "FRONTEND DEVELOPER";

  const letters = frontendText.split("").map((char, i) => (
    <span key={i} className="letter">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div className="flex flex-col items-center w-full">
      <div className="min-h-screen w-full bg-transparent pt-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        {/* Name Heading */}
        <h1
          className="glow-text text-center select-none font-bold leading-tight tracking-widest
          text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"  
        >
          SHASHI RAJ
        </h1>

        {/* Frontend Text Scatter */}
        <div
          className="frontend-scatter mt-6 select-none flex flex-wrap justify-center gap-10 sm:gap-4"
          aria-label="Frontend Developer"
          style={{
            fontSize: '1.65rem',
            textAlign: 'center',
          }}
        >
          {letters}
        </div>
      </div>

      {/* Menu List */}
      <div className="pb-16 sm:pb-20">
        <Menulist />
      </div>
    </div>
  );
};

export default Title;
