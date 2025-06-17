import React, { useState } from 'react';
import BarMenu from './BarMenu';
import Contact from './Contact';
import SidePopup from './SidePopup';
import ResumeModal from '../RSection/ResumeModal';
import Footer from './Footer';

const InteractPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <div className="fixed right-4 z-50">
        <BarMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>

      <SidePopup/>

      <div className="flex justify-center items-center h-screen px-4">
        <Contact />
      </div>

      <ResumeModal showMenu={showMenu}/>
    </div>
    <div className='h-auto w-full'>
       <Footer/>
    </div>
    </>
  );
};

export default InteractPage;
