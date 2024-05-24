import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Section1 from './Section1';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Hoteles from './Hoteles'; // Cambiado a Hoteles
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Section1 />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/hoteles" element={<Hoteles />} /> {/* Cambiado a Hoteles */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
