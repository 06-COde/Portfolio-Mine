import React, { useState, useEffect, useRef } from 'react';
import { accordionData } from '../utils/dataAccordian';
import gsap from 'gsap';

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionRef = useRef(null);
  const followerRef = useRef(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (accordionRef.current && !accordionRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const moveFollower = (e) => {
      const { clientX, clientY } = e;
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: 'power3.out',
      });
    };
    window.addEventListener('mousemove', moveFollower);

    return () => {
      window.removeEventListener('mousemove', moveFollower);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-yellow-400 pointer-events-none z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      <div
        ref={accordionRef}
        className="max-w-md mx-auto p-4 relative z-10"
      >
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="mb-2 border border-gray-700 rounded overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left p-4 bg-gray-700 text-white font-semibold hover:bg-gray-900 transition"
            >
              {item.question}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              } bg-transparent text-white`}
            >
              <div className="p-4">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
