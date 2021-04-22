import React from 'react'

import './styles/Impresiones.css';
import imgUnoUno from '../images/modelos/imgUnoUno.jpg';
import imgDosUno from '../images/modelos/imgDosUno.jpg';


function Impresiones() {
    return (
        <div className="impresiones__container">
            <div className="impresiones__titulo"><h1>Piezas Impresas en 3D</h1></div>

            <div className="row row-cols-1 row-cols-md-2 impresiones__row">

                <div className="col impresiones__col">
                    <img src={imgUnoUno} className="impresiones__img" alt="modelo"/>
                    <h5>Nombre:</h5>
                    <h5>Alto:</h5>
                    <h5>Ancho:</h5>
                    <h5>Largo:</h5>
                    <h5>Precio: $</h5>
                    <h5>Creador del Modelo</h5>
                    <h5>nombredelcreador</h5>
                    <h5>Pintor del Modelo</h5>
                    <h5>nombredelartista</h5>
                </div>

                <div className="col impresiones__col">
                    <img src={imgDosUno} className="impresiones__img" alt="modelo"/>
                    <h5>Nombre:</h5>
                    <h5>Alto:</h5>
                    <h5>Ancho:</h5>
                    <h5>Largo:</h5>
                    <h5>Precio: $</h5>
                    <h5>Creador del Modelo</h5>
                    <h5>nombredelcreador</h5>
                    <h5>Pintor del Modelo</h5>
                    <h5>nombredelartista</h5>
                </div>

            </div>

        </div>
    )
}

export default Impresiones;