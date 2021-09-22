import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Contacto.css';
import LogoMail from '../images/logo-mail.svg';
import LogoFace from '../images/logo-face.svg';
import LogoWhat from '../images/logo-what.svg';
import LogoInsta from '../images/logo-insta.svg';
import Header from '../components/Header';


function Contacto() {
    return (
        <React.Fragment>
            <Header />
                <div className="contacto__container">
                    <div className="contacto__titulo">
                        <h3>Si queres comunicarte con nosotros podes hacerlo por los distintos
                        canales que tenemos para ofrecerte</h3>
                    </div>
                    <div className="contacto__links">
                        <Link to="/contacto" onClick={() => window.open("https://api.whatsapp.com/send?phone=543513281376", "_blank")}>
                            <img src={LogoWhat} className="contacto__img" alt="Logo Whatsapp"/>
                        </Link>
                        <Link to="/contacto" onClick={() => window.open("mailto:yo.cuervo.yo@gmail.com", "_blank")}>
                            <img src={LogoMail} className="contacto__img" alt="Logo Gmail"/>
                        </Link>
                        <Link to="/contacto" onClick={() => window.open("https://www.instagram.com/yo.designs_/", "_blank")}>
                            <img src={LogoInsta} className="contacto__img" alt="Logo Instagram"/>
                        </Link>
                        <Link to="/contacto" onClick={() => window.open("https://facebook.com/profile.php?id=100042181947201", "_blank")}>
                            <img src={LogoFace} className="contacto__img" alt="Logo Facebook"/>
                        </Link>
                    </div>
                    <div className="contacto__data">
                        <h3>Whatsapp: +54 351 3 281376</h3>
                        <h3>Gmail: yo.cuervo.yo@gmail.com</h3>
                        <h3>Instagram: yo.designs_</h3>
                        <h3>Facebook: Yo - Diseños</h3>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Contacto;