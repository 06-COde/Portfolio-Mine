import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="h-full w-full relative top-0 bg-slate-800 text-white py-12 px-4 md:px-12 border-t border-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-wider">Shashi Raj</div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/06-COde" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rishav-sinha477" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:rishavsinha477@gmail.com" className="hover:text-blue-400 transition">
            <FaEnvelope />
          </a>
        </div>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/skill" className="hover:underline">Projects</Link>
          <Link to="/interactive-page" className="hover:underline">Contact</Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shashi Raj. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
