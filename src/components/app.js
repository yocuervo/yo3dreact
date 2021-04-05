import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Impresiones from '../pages/Impresiones';
import QuienesSomos from '../pages/QuienesSomos';
import Contacto from '../pages/Contacto';

import Layout from './Layout';
import AppRoute from './AppRoute';

function App() {
        return(
            <BrowserRouter>
                    <Switch>
                        <AppRoute exact path="/" component={Home} layout={Home} />
                        <AppRoute exact path="/impresiones" component={Impresiones} layout={Layout} />
                        <AppRoute exact path="/quienessomos" component={QuienesSomos} layout={Layout} />
                        <AppRoute exact path="/contacto" component={Contacto} layout={Layout} />
                    </Switch>
            </BrowserRouter>
        );
    }

export default App;