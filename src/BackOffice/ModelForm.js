import React from 'react';

import '../BackOffice/Styles/ModelForm.css';
import { Link } from 'react-router-dom';

class ModelForm extends React.Component {

    render() {
        return(           
            <React.Fragment>
                    <form className="ModelForm__contenedor__nuevo" onSubmit={this.props.onSubmit}>
                        <div className="row ModelForm__row">
                            <div className="col-4">Nombre</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        placeholder="Nombre del modelo"
                                        type="text"
                                        name="nombre"
                                        value={this.props.formValues.nombre}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Alto</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="alto"
                                        value={this.props.formValues.alto}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Ancho</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="ancho"
                                        value={this.props.formValues.ancho}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Largo</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="largo"
                                        value={this.props.formValues.largo}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Precio</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="precio"
                                        value={this.props.formValues.precio}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Creador del Modelo</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        placeholder="Url Modelador 3D"
                                        type="text"
                                        name="creadorModelo"
                                        value={this.props.formValues.creadorModelo}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Artista</div>
                            <div className="col">
                                <input  onChange={this.props.onChange}
                                        className="form-control ModelForm__input"
                                        placeholder="Quien lo pinto"
                                        type="text"
                                        name="artistaModelo"
                                        value={this.props.formValues.artistaModelo}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <button className="btn btn-primary">Subir Imagen</button>
                        </div>
                        <div className="row justify-content-end mr-3 ModelForm__row">
                                <Link to="/modelslist" className="btn btn-outline-secondary mr-3 btn-lg">
                                    Cancelar
                                </Link>
                                <button className="btn btn-outline-success btn-lg">Guardar</button>
                        </div>
                            {this.props.error && (
                            <p className="text-danger">
                                {this.props.error.message}
                            </p>
                            )}
                    </form>
            </React.Fragment>
        );
    }
}

export default ModelForm;
