import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Impresiones from '../pages/Impresiones';
import QuienesSomos from '../pages/QuienesSomos';
import Contacto from '../pages/Contacto';

import NotFound from '../pages/NotFound';

import ModelsList from '../BackOffice/ModelsList';
import ModelNew from '../BackOffice/ModelNew';
import ModelEdit from '../BackOffice/ModelEdit';

import './styles/app.css';
import Models from './Models';

function App() {
        return(
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/impresiones" component={Impresiones} />
                        <Route exact path="/quienessomos" component={QuienesSomos} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/models" component={Models} />
                        <Route exact path="/modelslist" component={ModelsList} />
                        <Route exact path="/modelslist/nuevomodelo" component={ModelNew} />
                        <Route exact path="/modelslist/:modelId/edit" component={ModelEdit} />
                        <Route component={NotFound} />
                    </Switch>
            </BrowserRouter>
        );
    }

export default App;