import React from 'react';

import '../BackOffice/Styles/NewModel.css';
import { Link } from 'react-router-dom';
import api from '../Api';
import PageLoading from '../components/PageLoading';

class NewModel extends React.Component {
    state = {
        loading: false,
        error: null,
        modelos: {
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
            modelos: {
                ...this.state.modelos,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null });

        try {
            await api.modelos.create(this.state.modelos);
            this.setState({ loading: false });
            
            console.log('aaaaaaaaaaaaaaaa');
            this.props.history.push('/modelslist');
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    render() {
            if (this.state.loading) {
                return <PageLoading />;
            }
            
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
                                        value={this.state.modelos.nombre}
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
                                        value={this.state.modelos.alto}
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
                                        value={this.state.modelos.ancho}
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
                                        value={this.state.modelos.largo}
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
                                        value={this.state.modelos.precio}
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
                                        value={this.state.modelos.creadorModelo}
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
                                        value={this.state.modelos.artistaModelo}
                                        />
                            </div>
                        </div>
                        <div className="row newmodel__row">
                            <button className="btn btn-primary">Subir Imagen</button>
                        </div>
                        <div className="row justify-content-end mr-3 newmodel__row">
                                <Link to="/modelslist" className="btn btn-outline-secondary mr-3 btn-lg">
                                    Cancelar
                                </Link>
                                <button onClick={this.handleClick}
                                        onChange={this.handleChange}
                                        onSubmit={this.handleSubmit}
                                        error={this.state.error}
                                        className="btn btn-outline-success btn-lg"
                                        type="submit"
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