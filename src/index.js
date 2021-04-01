import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/app';
import BackOffice from './BackOffice/BackOffice';
import ProductosBack from './BackOffice/ProductosBack';

const contenedor = document.getElementById('root');

ReactDOM.render(<ProductosBack />, contenedor);

