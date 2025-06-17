import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menulist from './Menulist';
import gsap from 'gsap';

const BarMenu = ({ showMenu, toggleMenu }) => {

  React.useEffect(() => {
    if (showMenu) {
      gsap.fromTo(
        '.menuListWrapper',
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.9, ease: 'power2.out' }
      );
    }
  }, [showMenu]);


  return (
    <>
      {/* 🌟 Bar icon in top-right */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 z-30 text-white text-2xl p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* 🌟 Full-width Navbar with blur & animation */}
      {showMenu && (
        <div className="menuListWrapper fixed top-0 left-0 w-full h-16 backdrop-blur-md bg-black/50 flex justify-center items-center z-20">
          <Menulist />
        </div>
      )}
    </>
  );
};

export default BarMenu;
