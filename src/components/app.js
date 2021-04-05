import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Impresiones from '../pages/Impresiones';
import Header from './Header';

function App() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/home/impresiones" component={Impresiones} />
                    <Route exact path="/header" component={Header} />
                </Switch>
            </BrowserRouter>
        );
    }

export default App;