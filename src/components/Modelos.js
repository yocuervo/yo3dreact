import React from 'react';

import './styles/Modelos.css';
import imgUnoUno from '../images/modelos/imgUnoUno.jpg';
import imgDosUno from '../images/modelos/imgDosUno.jpg';

class Modelos extends React.Component {
    render() {
        return (

            <div className="row row-cols-1 row-cols-md-2 modelos__row">

                    <div className="col modelos__col">
                        <img src={imgUnoUno} className="modelos__img" alt="modelo"/>
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

                    <div className="col modelos__col">
                        <img src={imgDosUno} className="modelos__img" alt="modelo"/>
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
        )
    }
}

export default Modelos;