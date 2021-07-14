import React from 'react';

import './styles/ModelsDetail.css';

class ModelsDetail extends React.Component {

    render() { 
        return (
            <div className="row row-cols-1 row-cols-md-2 modelsDetail__row">

            <div className="col modelsDetail__col">
                <img src={this.props.img} alt="Imagen del Modelo" className="modelsDetail__img" />
                <h5>Nombre: {this.props.model.nombre}</h5>
                <h5>Alto: {this.props.model.alto}cm</h5>
                <h5>Ancho: {this.props.model.ancho}cm</h5>
                <h5>Largo: {this.props.model.largo}cm</h5>
                <h5>Precio: ${this.props.model.precio}</h5>
                <h5>Creador del Modelo</h5>
                <h5>{this.props.model.creadorModelo}</h5>
                <h5>Pintor del Modelo</h5>
                <h5>{this.props.model.artistaModelo}</h5>
            </div>
            <div className="buttons">
                <button className="btn btn-info">Modificar</button>
                <button className="btn btn-danger">Eliminar</button>
            </div>
            
        </div>
            
        )
    }
}

export default ModelsDetail;