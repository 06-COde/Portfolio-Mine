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
      <div className="flex flex-col min-h-screen w-full bg-black shadow-xl relative overflow-hidden  overflow-y-auto  transition-transform duration-500 ease-in-out">
       <BarMenu showMenu={showMenu} toggleMenu={toggleMenu} />

      <div
        className={`flex flex-1 flex-col md:flex-row transition-transform duration-500 ease-in-out ${
        showMenu ? 'translate-y-20' : ''
        }`}
      >
      {/* About Text Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-black/90 p-6">
        <About />
      </div>

      {/* 3D Background + Accordian */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        <About3d/>
      </div>
      </div>
    </div>
   )}

    </>
  );
};

export default Canva;
