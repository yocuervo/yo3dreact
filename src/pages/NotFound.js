import React from 'react';

import error from '../images/error.svg';
import './styles/NotFound.css';

function NotFound() {
    return (
        <div className="error__container">
            <img className="error__img" src={error} alt="404"/>
        </div>
    )
}

export default NotFound;