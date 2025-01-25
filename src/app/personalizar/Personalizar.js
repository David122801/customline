import React, { useState } from "react";
import { Stage, Layer, Image, Text } from "react-konva";
import './Personalizar.css'


const Mug = () => {
  const [text, setText] = useState("Texto personalizado");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [color, setColor] = useState("#ffffff");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => setUploadedImage(img);
    };

    reader.readAsDataURL(file);
  };

  return (

    
    <div >
      <h1>Personaliza</h1>
      {/* Opciones de personalización */}
      <div className="customer">
        <label>Color de fondo: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <label>Texto: </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <br />
        <label>Subir imagen: </label>
        <input type="file" onChange={handleImageUpload} />
      </div>

      {/* Canvas del simulador */}
      <Stage width={400} height={400} style={{ border: "1px solid #ccc", margin: "0 auto" }}>
        <Layer>
          {/* Fondo */}
          <rect width={400} height={400} fill={color} />
          {/* Texto */}
          <Text
            text={text}
            x={50}
            y={50}
            fontSize={24}
            fontFamily="Arial"
            fill="black"
            draggable
          />
          {/* Imagen cargada */}
          {uploadedImage && (
            <Image
              image={uploadedImage}
              x={100}
              y={100}
              width={200}
              height={200}
              draggable
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Mug;
