import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';

function Header() {
    return (
     <div className="header">
            <Link to="/impresiones" className="btn btn-outline-light">Productos</Link>
            <Link to="/quienessomos" className="btn btn-outline-light">Quienes Somos</Link>
            <Link to="/contacto" className="btn btn-outline-light">Contacto</Link>
     </div>
    )
}

export default Header;