import React from 'react'

import './styles/QuienesSomos.css';
import Header from '../components/Header';

import ImgFondo from '../images/LogoCuervo.svg';

function QuienesSomos() {
    return (
        <React.Fragment>
            <Header />
                <div className="somos__container">
                    <img src={ImgFondo} alt="Imagen Decorativa" className="somos__img__fondo" />
                    <h2 className="somos__hdos">Yo-Diseños es un proyecto iniciado en el año 2015 aproximadamente, nacido directamente de la 
                        necesidad de poder hacer algo con el torrente de ideas que una mente puede llegar a generar.<br/>
                        Comenzó comercialmente como un taller de Serigrafía, diseño, plotteo e impresión pero con el 
                        tiempo fue mutando hasta llegar a ser un taller de Diseño Integral e impresión 3D.<br/>
                        El concepto es simple, buscamos materializar las ideas y divertirnos durante el proceso...</h2>
                        <br/>
                        <br/>
                        <br/>
                        <h5 className="somos__hcinco">Dato curioso: ¿Pasaste el mouse por encima del pájaro en la página de inicio?🤭</h5>
                </div>
        </React.Fragment>
    )
}

export default QuienesSomos;