import React, { useState, useEffect, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { galaxy_Img } from '../utils/constants';
import { Canvas } from '@react-three/fiber';
import GltfPlanet from './Planetgltf';
import Starfield from './Starfield';
import { Outlet, useLocation } from 'react-router-dom';
import About from './About';
import About3d from './About3d';
import BarMenu from './BarMenu';

const Canva = () => {
  const location = useLocation();
  const isAboutPage = location.pathname.includes('/about');

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // 🟢 Auto-close the menu when route changes
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <>
      {!isAboutPage && (
        <div className='relative h-[100vh] w-full bg-galaxy text-white flex justify-center items-center overflow-hidden'>
          <img
            src={galaxy_Img}
            alt="galaxy"
            className='h-full w-full object-cover opacity-30 absolute z-0'
          />

          <Canvas
            camera={{ position: [0, 0, 15], fov: 25 }}
            style={{ pointerEvents: 'none' }}
            className="z-10"
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} />
            <Starfield />
            <Suspense fallback={null}>
              <GltfPlanet/>
            </Suspense>
          </Canvas>

          <div className="absolute flex justify-center items-center z-20">
            <Outlet />
          </div>
        </div>
      )}

      {isAboutPage && (
        <div className="flex flex-col h-screen w-full shadow-xl relative bg-black transition-transform duration-500 ease-in-out">
          <BarMenu showMenu={showMenu} toggleMenu={toggleMenu} />

          <div
            className={`flex flex-1 flex-col md:flex-row transition-transform duration-500 ease-in-out ${
              showMenu ? 'translate-y-20' : ''
            }`}
          >
            <div
              id="about"
              className="w-full md:w-2/4 flex-1 flex flex-col justify-center items-center bg-black/90 p-4 md:p-8"
            >
              <About />
            </div>

            <div
              className="w-full md:flex-1 flex justify-center items-center text-white text-lg md:text-xl font-semibold bg-black/80"
            >
              <About3d />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Canva;
