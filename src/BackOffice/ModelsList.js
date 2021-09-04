import React from 'react';

import '../BackOffice/Styles/ModelsList.css';
import { Link } from 'react-router-dom';

import Models from '../components/Models';

function irArriba(){
    window.scrollTo({top:0, behavior: 'smooth'});
  }

class ModelsList extends React.Component {

    render() {
        return (
            <div className="modelslist__container">
                <div className="row modelslist__header">
                    <div className="col modelslist__titulo">PRODUCTOS</div>
                    <div className="col">
                        <Link to="/modelslist/nuevomodelo" className="btn btn-primary">Nuevo Producto</Link>
                    </div>
                </div>
                    <div className="row modelslist__contenedor">
                        <div className="col">
                            <div className="modelslist__producto">
                                <Models />
                            </div>
                        </div>
                    </div>
                <button onClick={irArriba} className="btn btn-outline-info btn-lg btn-block mt-2 mb-2">Volver Arriba</button>
            </div>
        );
    }
}

export default ModelsList;
