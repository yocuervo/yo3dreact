import React from 'react';

import error from '../images/error.svg';
import './styles/NotFound.css';

function NotFound() {
    return (
        <div className="container__error">
            <img src={error} alt="404"/>
        </div>
    )
}

export default NotFound;