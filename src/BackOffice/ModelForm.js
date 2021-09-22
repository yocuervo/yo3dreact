import React from 'react';

import '../BackOffice/Styles/ModelForm.css';
import { Link } from 'react-router-dom';
import ModelDelete from './ModelDelete';

function ModelForm(props) {

        return(           
            <React.Fragment>
                    <form className="ModelForm__contenedor__nuevo" onSubmit={props.onSubmit}>
                        <div className="row ModelForm__row">
                            <div className="col-4">Nombre</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        placeholder="Nombre del modelo"
                                        type="text"
                                        name="nombre"
                                        value={props.formValues.nombre}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Alto</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="alto"
                                        value={props.formValues.alto}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Ancho</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="ancho"
                                        value={props.formValues.ancho}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Largo</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="largo"
                                        value={props.formValues.largo}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Precio</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        type="number"
                                        name="precio"
                                        value={props.formValues.precio}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Creador del Modelo</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        placeholder="Url Modelador 3D"
                                        type="text"
                                        name="creadorModelo"
                                        value={props.formValues.creadorModelo}
                                        />
                            </div>
                        </div>
                        <div className="row ModelForm__row">
                            <div className="col-4">Artista</div>
                            <div className="col">
                                <input  onChange={props.onChange}
                                        className="form-control ModelForm__input"
                                        placeholder="Quien lo pinto"
                                        type="text"
                                        name="artistaModelo"
                                        value={props.formValues.artistaModelo}
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
                                <button className="btn btn-success btn-lg">Guardar</button>
                        </div>
                            {props.error && (
                                <p className="text-danger">
                                {props.error.message}
                            </p>
                            )}
                    </form>
                        <div className="modelForm__contenedorButton">
                            <button onClick={props.onOpenModal} className="btn btn-outline-danger btn-block">Eliminar</button>
                            <ModelDelete
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteModel={props.onDeleteModel}
                            />
                        </div>
            </React.Fragment>
        );
    }

export default ModelForm;
