import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GltfPlanet = () => {
  const planetRef = useRef();
  const { scene } = useGLTF('/lavaplanet_gltf/scene.gltf');
  const [scale, setScale] = useState(2.5);

  // Adjust scale based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) setScale(1.2);
      else if (width < 768) setScale(1.7);
      else if (width < 1024) setScale(2.2);
      else setScale(2.5);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = false;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.x += 0.004;
      planetRef.current.rotation.z += 0.004;
    }
  });

  return (
    <primitive
      ref={planetRef}
      object={scene}
      position={[0, 0, 0]}
      rotation={[0, 1.4, 0.5]}
      scale={scale}
    />
  );
};

useGLTF.preload('/lavaplanet_gltf/scene.gltf');
export default GltfPlanet;
