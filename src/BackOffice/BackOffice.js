import React from 'react';

import '../BackOffice/Styles/BackOffice.css';

function BackOffice() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 marco__izq">
                    <button className="btn btn-primary boton">Nuevos Productos</button>
                        <br/>
                    <button className="btn btn-info">Productos</button>
                </div>
                <div className="col marco__der">     
                    <div className="visualizador">

                    </div>
                    <div className="botones">
                        <button className="btn btn-danger mr-3">ELIMINAR</button>
                        <button className="btn btn-info mr-3">CANCELAR</button>
                        <button className="btn btn-success mr-3">GUARDAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackOffice;
