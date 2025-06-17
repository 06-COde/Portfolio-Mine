import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



const ResumeModal = ({showMenu}) => {
  const [resumeView, setResumeView] = useState(false);

  const toggleResume = () => {
    setResumeView((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = resumeView ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [resumeView]);

  return (
    <>
      <button
        onClick={toggleResume}
        className={`absolute top-4 left-4 z-50 py-2 px-5 bg-blue-500 border border-white rounded-xl text-white font-bold hover:scale-105 transition-transform ${
          showMenu ? 'blur-sm pointer-events-none' : ''
        }`}
      >
        Resume!
      </button>

      {resumeView && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
          onClick={toggleResume}
        >
         <div
         className="relative max-h-screen max-w-4xl w-[90vw] bg-white rounded-lg shadow-xl overflow-y-auto"
         onClick={(e) => e.stopPropagation()} 
        >
        <button
        onClick={toggleResume}
        className="absolute top-4 right-4 bg-blue-600 text-white text-lg px-3 py-1 rounded-lg z-[10001] hover:scale-105"
        >
       <FontAwesomeIcon icon={faXmark} />
       </button>
  
       <img
       src="/asset/logos/Resume.png"
       alt="Resume"
       className="w-full h-auto"
       />
      </div>
      </div>
      )}
    </>
  );
};

export default ResumeModal;
