import React from 'react'

import './styles/Impresiones.css';
import Models from '../components/Models';

class Impresiones extends React.Component {
    state = {
        modelos: {
            nombre:'',
            alto:'',
            largo:'',
            precio:'',
            creadorModelo:'',
            artistaModelo:''
        }
    }
    render() {
        return (
            <div className="impresiones__container">
                <div className="impresiones__titulo"><h1>Piezas Impresas en 3D</h1></div>
                <Models />
            </div>
        )
    }
}
    
    export default Impresiones;