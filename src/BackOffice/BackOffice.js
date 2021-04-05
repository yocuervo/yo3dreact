import React from 'react';

import '../BackOffice/Styles/BackOffice.css';

function irArriba(){
    window.scrollTo({top:0, behavior: 'smooth'});
  }

function BackOffice() {
    return (
        <div className="container__back">
            <div className="row header">
                <div className="col titulo">PRODUCTOS</div>
                <div className="col">
                    <button className="btn btn-primary boton__header">Nuevo Producto</button>
                </div>
            </div>
            <div className="row contenedor">
                <div className="col">
                    <div className="producto"></div>
                    <button className="btn btn-info  ml-2 mr-2">Modificar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
                <div className="col">
                    <div className="producto"></div>
                    <button className="btn btn-info  ml-2 mr-2">Modificar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
            <button onClick={irArriba} className="btn btn-outline-info btn-lg btn-block mt-2 mb-2">Volver Arriba</button>
        </div>
    );
}

export default BackOffice;
