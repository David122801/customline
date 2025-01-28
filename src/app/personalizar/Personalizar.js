import React from "react";
import Mug3D from "./Mug3D"; // Importamos el componente de la taza personalizada
import "./Personalizar.css"; // Archivo CSS para los estilos

const Personalizar = () => {
  return (
    <div className="personalizar-container">
      <h1>Personaliza tu Taza</h1>
      <Mug3D />
    </div>
  );
};

export default Personalizar;
