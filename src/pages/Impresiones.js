import React from 'react'

import './styles/Impresiones.css';
import Modelos from '../components/Modelos';

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
                <Modelos />
            </div>
        )
    }
}
    
    export default Impresiones;