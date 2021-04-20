import React from 'react';

import '../BackOffice/Styles/ProductosBack.css';

function ProductosBack() {
    return(
        <div className="container-fluid back__container">
            <div className="back__titulo">Producto Nuevo</div>
                <div className="back__contenedor__nuevo">
                    <div className="row back__row">
                        <div className="col-4">Nombre</div>
                        <div className="col"><input className="form-control back__input" placeholder="Nombre del modelo" type="text"/></div>
                    </div>
                    <div className="row back__row">
                        <div className="col-4">Alto</div>
                        <div className="col"><input className="form-control back__input" type="number"/></div>
                    </div>
                    <div className="row back__row">
                        <div className="col-4">Ancho</div>
                        <div className="col"><input className="form-control back__input" type="number"/></div>
                    </div>
                    <div className="row back__row">
                        <div className="col-4">Largo</div>
                        <div className="col"><input className="form-control back__input" type="number"/></div>
                    </div>
                    <div className="row back__row">
                        <div className="col-4">Precio</div>
                        <div className="col"><input className="form-control back__input" type="number"/></div>
                    </div>
                    <div className="row back__row">
                        <div className="col-4">Creador del Modelo</div>
                        <div className="col"><input className="form-control back__input" placeholder="Url Modelador 3D" type="text"/></div>
                    </div>
                    <div className="row back__row">
                        <div className="col-4">Artista</div>
                        <div className="col"><input className="form-control back__input" placeholder="Quien lo pinto" type="text"/></div>
                    </div>
                    <div className="row back__row">
                        <button className="btn btn-primary">Subir Imagen</button>
                    </div>
                    <div className="row justify-content-end mr-3 back__row">
                            <button className="btn btn-outline-secondary mr-3 btn-lg">Cancelar</button>
                            <button className="btn btn-outline-success btn-lg">Guardar</button>
                    </div>
                </div>
        </div>
    );
}

export default ProductosBack;