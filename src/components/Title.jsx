import React from 'react';
import '../utils/title.css';
import Menulist from './Menulist';

const Title = () => {
  const frontendText = 'FRONTEND DEVELOPER';

  const letters = frontendText.split('').map((char, i) => (
    <span key={i} className="letter">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="min-h-screen w-full bg-transparent pt-24 sm:pt-20 px-4 flex flex-col justify-center items-center">
        {/* Name Heading */}
        <h1
          className="glow-text text-center select-none font-bold leading-tight tracking-widest
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          SHASHI RAJ
        </h1>

        {/* Frontend Text Scatter */}
        <div
          className="frontend-scatter mt-6 select-none flex flex-wrap justify-center gap-2 sm:gap-4"
          aria-label="Frontend Developer"
        >
          {letters}
        </div>
      </div>

      {/* Menu List */}
      <div className="pb-20 sm:pb-24">
        <Menulist />
      </div>
    </div>
  );
};

export default Title;
