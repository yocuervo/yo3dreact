import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Impresiones from '../pages/Impresiones';
import QuienesSomos from '../pages/QuienesSomos';
import Contacto from '../pages/Contacto';

import Layout from './Layout';
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
                        <Route exact path="/" component={Home} layout={Home} />
                        <Route exact path="/impresiones" component={Impresiones} layout={Layout} />
                        <Route exact path="/quienessomos" component={QuienesSomos} layout={Layout} />
                        <Route exact path="/contacto" component={Contacto} layout={Layout} />
                        <Route exact path="/models" component={Models} layout={Models} />
                        <Route exact path="/modelslist" component={ModelsList} layout={ModelsList} />
                        <Route exact path="/modelslist/nuevomodelo" component={ModelNew} layout={ModelNew} />
                        <Route exact path="/modelslist/:modelId/edit" component={ModelEdit} layout={ModelEdit} />
                        <Route component={NotFound} layout={NotFound} />
                    </Switch>
            </BrowserRouter>
        );
    }

export default App;