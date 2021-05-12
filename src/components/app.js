import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Impresiones from '../pages/Impresiones';
import QuienesSomos from '../pages/QuienesSomos';
import Contacto from '../pages/Contacto';

import Layout from './Layout';
import AppRoute from './AppRoute';
import NotFound from '../pages/NotFound';

import ModelsList from '../BackOffice/ModelsList';
import NewModel from '../BackOffice/NewModel';

import './styles/app.css';

function App() {
        return(
            <BrowserRouter>
                    <Switch>
                        <AppRoute exact path="/" component={Home} layout={Home} />
                        <AppRoute exact path="/impresiones" component={Impresiones} layout={Layout} />
                        <AppRoute exact path="/quienessomos" component={QuienesSomos} layout={Layout} />
                        <AppRoute exact path="/contacto" component={Contacto} layout={Layout} />
                        <AppRoute exact path="/modelslist" component={ModelsList} layout={Layout} />
                        <AppRoute exact path="/nuevomodelo" component={NewModel} layout={Layout} />
                        <AppRoute component={NotFound} layout={NotFound} />
                    </Switch>
            </BrowserRouter>
        );
    }

export default App;