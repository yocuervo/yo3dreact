import React from 'react'

import './styles/Impresiones.css';
import Models from '../components/Models';
import Header from '../components/Header';

class Impresiones extends React.Component {
    state = {
        piezas: {
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
            <React.Fragment>
                <Header />
                    <div className="impresiones__container">
                        <div className="impresiones__titulo"><h1>Piezas Impresas en 3D</h1></div>
                        <Models />
                    </div>
            </React.Fragment>
        )
    }
}
    
    export default Impresiones;