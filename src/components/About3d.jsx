import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Accordian from './Accordian';

const Meteor = () => {
  const meteorRef = React.useRef();

  useFrame(() => {
    if (meteorRef.current) {
      meteorRef.current.position.x -= 0.02;
      meteorRef.current.position.y -= 0.04;

      if (meteorRef.current.position.y < -5) {
        meteorRef.current.position.y = Math.random() * 10 + 5;
        meteorRef.current.position.x = Math.random() * 20 - 10;
      }
    }
  });

  return (
    <mesh ref={meteorRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
};

const MeteorsField = ({ count = 100 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <Meteor key={i} />
    ))}
  </>
);

const About3dWithAccordian = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden">
      {/* Canvas BG */}
      <Canvas
        camera={{ position: [1, 2, 8], fov: 60 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={4} />
        <MeteorsField count={130} />
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/60 flex items-center justify-center p-4 overflow-auto">
        <div className="w-full max-w-lg">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default About3dWithAccordian;
