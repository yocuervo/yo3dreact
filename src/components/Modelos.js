import React from 'react';

import './styles/Modelos.css';
import imgUnoUno from '../images/modelos/imgUnoUno.jpg';

class Modelos extends React.Component {
    state = {
        data: {
            nombre: "Exequiel",
            alto: "220",
            ancho: "50",
            largo: "30",
            precio: "2500",
            creadorModelo: "thingiverse",
            artistaModelo: "Ivana"
        }
    }

    render() {
        return (

            <div className="row row-cols-1 row-cols-md-2 modelos__row">

                    <div className="col modelos__col">
                        <img src={imgUnoUno} className="modelos__img" alt="modelo"/>
                        <h5>Nombre: {this.state.data.nombre}</h5>
                        <h5>Alto: {this.state.data.alto}cm</h5>
                        <h5>Ancho: {this.state.data.ancho}cm</h5>
                        <h5>Largo: {this.state.data.largo}cm</h5>
                        <h5>Precio: ${this.state.data.precio}</h5>
                        <h5>Creador del Modelo</h5>
                        <h5>{this.state.data.creadorModelo}</h5>
                        <h5>Pintor del Modelo</h5>
                        <h5>{this.state.data.artistaModelo}</h5>
                    </div>

                </div>
        )
    }
}

export default Modelos;