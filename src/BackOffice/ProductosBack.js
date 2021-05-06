import React from 'react';

import '../BackOffice/Styles/ProductosBack.css';
import { Link } from 'react-router-dom';

class ProductosBack extends React.Component {
    state = {
        form: {
            nombre:'',
            alto:'',
            largo:'',
            precio:'',
            creadorModelo:'',
            artistaModelo:''
        }
    }

    handleClick = e => {
        console.log('Button was Clicked');
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
            return(
                <div className="container-fluid back__container">
                <div className="back__titulo">Producto Nuevo</div>
                    <div className="back__contenedor__nuevo">
                        <div className="row back__row">
                            <div className="col-4">Nombre</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        placeholder="Nombre del modelo"
                                        type="text"
                                        name="nombre"
                                        value={this.state.nombre}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <div className="col-4">Alto</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        type="number"
                                        name="alto"
                                        value={this.state.alto}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <div className="col-4">Ancho</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        type="number"
                                        name="ancho"
                                        value={this.state.ancho}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <div className="col-4">Largo</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        type="number"
                                        name="largo"
                                        value={this.state.largo}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <div className="col-4">Precio</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        type="number"
                                        name="precio"
                                        value={this.state.precio}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <div className="col-4">Creador del Modelo</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        placeholder="Url Modelador 3D"
                                        type="text"
                                        name="creadorModelo"
                                        value={this.state.creadorModelo}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <div className="col-4">Artista</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control back__input"
                                        placeholder="Quien lo pinto"
                                        type="text"
                                        name="artistaModelo"
                                        value={this.state.artistaModelo}
                                        />
                            </div>
                        </div>
                        <div className="row back__row">
                            <button className="btn btn-primary">Subir Imagen</button>
                        </div>
                        <div className="row justify-content-end mr-3 back__row">
                                <Link to="/BackOffice" className="btn btn-outline-secondary mr-3 btn-lg">Cancelar</Link>
                                <button onClick={this.handleClick}
                                        className="btn btn-outline-success btn-lg"
                                        type="button">
                                    Guardar
                                </button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ProductosBack;