import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

function Sphere({ position }) {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial metalness={1} roughness={0.5} />
    </mesh>
  );
}

function Prism() {
  return (
    <mesh>
      <boxGeometry args={[10, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[0, 0, 0]} />
      {/* <Prism /> */}
    </Canvas>
  );
}

export default ThreeScene;
