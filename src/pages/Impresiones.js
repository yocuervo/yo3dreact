import React from 'react'

import './styles/Impresiones.css';
import ImgFondo from '../images/fondo.png';

function Impresiones() {
    return (
        <div className="container__impresiones">
            {/* <img src={ImgFondo} alt="Imagen de fondo" className="fondo" /> */}
            <div className="titulo"><h1>Piezas Impresas en 3D</h1></div>
            <div className="row container__modelo">
                <div className="col">
                    <div className="contenedor__modelos"></div>
                    <h5>Nombre:</h5>
                    <h5>Alto: Ancho: Largo:</h5>
                    <h5>Precio $</h5>
                    <h5>Creador del Modelo:</h5>
                    <h5>Pintor del Modelo:</h5>
                </div>
                <div className="col">
                <div className="contenedor__modelos"></div>
                    <h5>Nombre:</h5>
                    <h5>Alto: Ancho: Largo:</h5>
                    <h5>Precio $</h5>
                    <h5>Creador del Modelo:</h5>
                    <h5>Pintor del Modelo:</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="contenedor__modelos"></div>
                    <h5>Nombre:</h5>
                    <h5>Alto: Ancho: Largo:</h5>
                    <h5>Precio $</h5>
                    <h5>Creador del Modelo:</h5>
                    <h5>Pintor del Modelo:</h5>
                </div>
                <div className="col">
                <div className="contenedor__modelos"></div>
                    <h5>Nombre:</h5>
                    <h5>Alto: Ancho: Largo:</h5>
                    <h5>Precio $</h5>
                    <h5>Creador del Modelo:</h5>
                    <h5>Pintor del Modelo:</h5>
                </div>
            </div>
        </div>
    )
}

export default Impresiones;