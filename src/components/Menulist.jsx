import React from 'react';
import { Link } from 'react-router-dom';

const Menulist = () => {
  return (
    <div className="w-full">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 uppercase text-white">
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
};

export default Menulist;
