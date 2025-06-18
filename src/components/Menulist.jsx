import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BarMenu from './BarMenu';

const Menulist = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  // If not on home page, show regular full menu only
  if (!isHome) {
    return (
      <div className="w-full">
        <ul className="flex justify-center items-center gap-10 uppercase text-white">
          <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
            <Link to="/skill">Skills</Link>
          </li>
          <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
            <Link to="/interactive-page">Interactive Page</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      {/* Home Page Only: Bar Menu Toggle Button */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <BarMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        </div>
      )}

      {/* Home Page Only: Desktop View */}
      {!isMobile && (
        <div className="w-full">
          <ul className="flex justify-center items-center gap-10 uppercase text-white">
            <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
              <Link to="/">Home</Link>
            </li>
            <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
              <Link to="/about">About Us</Link>
            </li>
            <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
              <Link to="/skill">Skills</Link>
            </li>
            <li className="font-medium text-lg md:text-xl cursor-pointer hover:text-gray-400">
              <Link to="/interactive-page">Interactive Page</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Menu (only on Home) */}
      {isMobile && showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-40 transition-all duration-500">
          <ul className="flex flex-col gap-8 text-white text-2xl uppercase text-center">
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>
              <Link to="/about">About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>
              <Link to="/skill">Skills</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>
              <Link to="/interactive-page">Interactive Page</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menulist;
