import React from 'react';
import { FlipWords } from './Flipword';

const About = () => {
  return (
    <div className="text-white bg-black/50 p-4 md:p-6 rounded-lg shadow-lg w-full max-w-xl transition duration-300 ease-in-out overflow-auto">
      <h1 className="text-xl md:text-2xl font-bold">
        Hi, I'm{' '}
        <span className="text-blue-400 text-2xl md:text-4xl">Shashi Raj</span>
        <br />
        A developer dedicated to crafting
        <div>
          <FlipWords
            words={['Secure', 'Modern', 'Scalable']}
            className="font-black text-2xl md:text-4xl text-yellow-200"
          />
          web solutions
        </div>
      </h1>

      <div className="flex flex-col items-start pt-4 space-y-4">
        <p className="text-base md:text-lg leading-relaxed">
          A passionate developer with a strong foundation in frontend development and a keen eye for building engaging user experiences. I started my journey as a frontend-focused developer while creating my portfolio during my preparation for MERN stack roles, where I gained solid expertise in UI/UX and modern web technologies. After joining the organization, I transitioned into a Backend Developer role, where I now focus on designing scalable systems, developing robust RESTful APIs, and optimizing backend performance. My experience enables me to approach problems with a full-stack perspective, ensuring both efficiency and user-centric design.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          I specialize in building high-performance backend systems, including API development, data processing, authentication flows, and system optimization. I have hands-on experience with technologies like Node.js, Express.js, MongoDB, and modern tooling for automation and scalability. While my current focus is backend engineering, my frontend background allows me to build solutions that are not only technically strong but also intuitive and seamless from a user perspective.
        </p>
      </div>
    </div>
  );
};

export default About;