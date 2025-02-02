import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Personalizar from "./app/personalizar/Personalizar.js";
import Inicio from "./app/inicio/Inicio.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav className="Navbar">
          <Link to="/" >Inicio</Link>
          <Link to="/personalizar"  >Personalizar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/personalizar" element={<Personalizar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
