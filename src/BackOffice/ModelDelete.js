import React from 'react';
import Modal from './Modal';

function ModelDelete (props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="ModelDelete">
            <h1>¿Seguro que desea Eliminar?</h1>

            <div>
                <button onClick={props.onDeleteModel} className="btn btn-danger mr-4">Eliminar</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
            </div>
        </div>
    </Modal>;
}

export default ModelDelete;