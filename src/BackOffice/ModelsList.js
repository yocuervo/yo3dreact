import React from 'react';

import '../BackOffice/Styles/ModelsList.css';
import { Link } from 'react-router-dom';

import Models from './Models';

function irArriba(){
    window.scrollTo({top:0, behavior: 'smooth'});
  }

class ModelsList extends React.Component {
    state = {
        data: {
            "nombre": "Exequiel",
            "alto": "170",
            "ancho": "50",
            "largo": "30",
            "precio": "2500",
            "creadorModelo": "thingiverse",
            "artistaModelo": "Ivana"
        }
    }

    render() {
        return (
            <div className="modelslist__container">
                <div className="row modelslist__header">
                    <div className="col modelslist__titulo">PRODUCTOS</div>
                    <div className="col">
                        <Link to="/nuevomodelo" className="btn btn-primary">Nuevo Producto</Link>
                    </div>
                </div>
                    <div className="row modelslist__contenedor">
                        <div className="col">
                            <div className="modelslist__producto">
                                <Models models={this.state.data}/>
                            </div>
                            <button className="btn btn-info  ml-2 mr-2">Modificar</button>
                            <button className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                <button onClick={irArriba} className="btn btn-outline-info btn-lg btn-block mt-2 mb-2">Volver Arriba</button>
            </div>
        );
    }
}

export default ModelsList;
