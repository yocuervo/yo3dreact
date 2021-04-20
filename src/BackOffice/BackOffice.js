import React from 'react';

import '../BackOffice/Styles/BackOffice.css';
import { Link } from 'react-router-dom';

function irArriba(){
    window.scrollTo({top:0, behavior: 'smooth'});
  }

function BackOffice() {
    return (
        <div className="backOffice__container">
            <div className="row backOffice__header">
                <div className="col backOffice__titulo">PRODUCTOS</div>
                <div className="col">
                    <Link to="/backproductos" className="btn btn-primary boton__header">Nuevo Producto</Link>
                </div>
            </div>
            <div className="row backOffice__contenedor">
                <div className="col">
                    <div className="backOffice__producto"></div>
                    <button className="btn btn-info  ml-2 mr-2">Modificar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
                <div className="col">
                    <div className="backOffice__producto"></div>
                    <button className="btn btn-info  ml-2 mr-2">Modificar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
            <button onClick={irArriba} className="btn btn-outline-info btn-lg btn-block mt-2 mb-2">Volver Arriba</button>
        </div>
    );
}

export default BackOffice;
