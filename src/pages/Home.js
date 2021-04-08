import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

import ImgYo from '../images/LogoYo.svg';
import ImgCuervo from '../images/LogoCuervo.svg';

function Home() {
    return(
        <React.Fragment>
            <div className="container__home">
                <div className="row col-12">
                    <Link   to="/impresiones" 
                            className="col-sm-8 col-4 mx-auto btn btn-primary font-weight-bold boton">
                            INICIO
                    </Link>
                </div>
                <div className="contenedor__img">
                    <img src={ImgYo} alt="Logo" className="imgYo"/>
                    <img src={ImgCuervo} alt="Logo" className="imgCuervo"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;