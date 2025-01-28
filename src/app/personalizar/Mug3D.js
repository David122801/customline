import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const MugModel = (props) => {
  const { scene } = useGLTF("public/models/mug.glb"); // Cargar el modelo 3D
  return <primitive object={scene} {...props} />;
};

const Mug3D = () => {
  return (
    <Canvas className="canvas-container" camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <MugModel position={[0, -1, 0]} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Mug3D;
