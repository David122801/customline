import React, { Suspense, useState } from "react";
import "./Personalizar.css";
import { Canvas } from "@react-three/fiber";
import { Mug } from "./Mug/Mug";
import { OrbitControls, Environment } from "@react-three/drei";

const Personalizar = () => {
  const [imageTexture, setImageTexture] = useState(null);

  // Función para manejar la carga de imágenes
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageTexture(url);
    }
  };

  return (
    <>
      <h1 className="perso">Personalizar</h1>

      <div className="simulador">

        <div className="opciones">
          <label>Carga una imagen</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <label>Seleciona Color</label>
        </div>

        <div className="modelo" style={{ width: "80%", height: "88vh" }}>

          <Canvas camera={{ zoom: 0.8, position: [6, 6, 6] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[35, 35, 0]} intensity={0.4} />
            <pointLight position={[-35, 35, 0]} intensity={0.4} />
            <Suspense fallback={null}>
              <Mug imageTexture={imageTexture} />
              <Environment preset="sunset" />
            </Suspense>
            <OrbitControls />
          </Canvas>

        </div>
      </div>
    </>
  );
};

export default Personalizar;
