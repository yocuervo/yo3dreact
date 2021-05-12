import React from 'react';

import '../BackOffice/Styles/NewModel.css';
import { Link } from 'react-router-dom';

class NewModel extends React.Component {
    state = {
        form: {
            nombre:'',
            alto:'',
            ancho:'',
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

    handleSubmit = e => {
        e.preventDefault();
        console.log('Formulario Subido');
        console.log(this.state)
    };

    render() {
            return(
                <div className="container-fluid newmodel__container">
                <div className="newmodel__titulo">Producto Nuevo</div>
                    <form className="newmodel__contenedor__nuevo" onSubmit={this.handleSubmit}>
                        <div className="row newmodel__row">
                            <div className="col-4">Nombre</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        placeholder="Nombre del modelo"
                                        type="text"
                                        name="nombre"
                                        value={this.state.form.nombre}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <div className="col-4">Alto</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        type="number"
                                        name="alto"
                                        value={this.state.form.alto}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <div className="col-4">Ancho</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        type="number"
                                        name="ancho"
                                        value={this.state.form.ancho}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <div className="col-4">Largo</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        type="number"
                                        name="largo"
                                        value={this.state.form.largo}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <div className="col-4">Precio</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        type="number"
                                        name="precio"
                                        value={this.state.form.precio}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <div className="col-4">Creador del Modelo</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        placeholder="Url Modelador 3D"
                                        type="text"
                                        name="creadorModelo"
                                        value={this.state.form.creadorModelo}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <div className="col-4">Artista</div>
                            <div className="col">
                                <input  onChange={this.handleChange}
                                        className="form-control newmodel__input"
                                        placeholder="Quien lo pinto"
                                        type="text"
                                        name="artistaModelo"
                                        value={this.state.form.artistaModelo}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <button className="btn btn-primary">Subir Imagen</button>
                        </div>
                        <div className="row justify-content-end mr-3 newmodel__row">
                                <Link to="/modelslist" className="btn btn-outline-secondary mr-3 btn-lg">Cancelar</Link>
                                <button onClick={this.handleClick}
                                        className="btn btn-outline-success btn-lg"
                                > 
                                    Guardar
                                </button>
                        </div>
                    </form>
            </div>
        );
    }
}

export default NewModel;