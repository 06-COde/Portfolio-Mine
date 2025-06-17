import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GltfPlanet = () => {
  const planetRef = useRef();
  const { scene } = useGLTF('/lavaplanet_gltf/scene.gltf');

  useEffect(() => {
    console.log('✅ Loaded GLTF Scene:', scene);

    // Optional: debug visibility
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = false;
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
      scale={2.5} // Try adjusting this
    />
  );
};

useGLTF.preload('/lavaplanet_gltf/scene.gltf');
export default GltfPlanet;
