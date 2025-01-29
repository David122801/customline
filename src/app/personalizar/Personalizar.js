import React, { Suspense } from "react";
import "./Personalizar.css"; // Archivo CSS para los estilos
import { Canvas } from 'react-three-fiber';
import { Mug } from './Mug/Mug';
import { OrbitControls, Environment } from '@react-three/drei';

const Personalizar = () => {
  return (
    <>
      <h1>Personalizar</h1>

      <div style={{ width: '100%', height: "88vh" }}>
        <Canvas className="modelo" camera={{ zoom: 1, position: [5, 10, 5] }} >
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />

          <Suspense fallback={null}>
            <Mug />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default Personalizar;
