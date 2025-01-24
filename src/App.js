
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Personalizar from "./app/personalizar/Personalizar.js";
import Inicio from './app/inicio/Inicio.js';
import Header from "./components/Header.js";


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" component={Inicio} />
          <Route path="/personalizar" component={Personalizar} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
