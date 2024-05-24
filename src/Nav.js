import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="logo">
            <i className="fa-brands fa-pied-piper-alt"></i>
          </Link>
        </li>
        <li><Link to="/" className="link">Inicio</Link></li>
        <li><Link to="/nosotros" className="link">Nosotros</Link></li>
        <li><Link to="/contacto" className="link">Contacto</Link></li>
        <li><Link to="/hoteles" className="link">Hoteles</Link></li> {/* Asegúrate de que el enlace a Hoteles esté aquí */}
      </ul>
    </nav>
  );
}

export default Nav;
