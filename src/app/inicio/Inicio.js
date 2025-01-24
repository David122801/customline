import React from "react";
import './Inicio.css';


function Inicio() {
  return (
    
    <div className="container">
    <header className="header">
      <nav>
    
  
      </nav>
      <h1>¡Bienvenidos!</h1>
      <p>Somos la mejor opción si deseas cualquier tipo de customización...</p>
    </header>

    <main className="main-content">
      <h2>Nuestro Trabajo</h2>
      <img
        src="/productos.jpeg"
        alt="Productos que manejamos en customline"
        className="custom-image"
      />
      <img
        src="/productos.jpeg"
        alt="Productos que manejamos en customline"
        className="custom-image"
      />
      <img
        src="/productos.jpeg"
        alt="Productos que manejamos en customline"
        className="custom-image"
      />
      <img
        src="/productos.jpeg"
        alt="Productos que manejamos en customline"
        className="custom-image"
      />

      {/* Rutas definidas */}
      
    </main>

    <form className="contact-form">
      <h2>¿Dudas? Te contactamos.</h2>
      <label htmlFor="name">Tu Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Gisela Ocoro Popayán"
      />

      <label htmlFor="number">Tu Whatsapp</label>
      <input
        type="tel"
        name="number"
        id="number"
        placeholder="3194444444"
      />

      <button type="submit" value="submit">
        Enviar
      </button>
    </form>
  </div>
  );
}

export default Inicio;
