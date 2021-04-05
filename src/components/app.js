import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Impresiones from '../pages/Impresiones';

import Layout from './Layout';

function App() {
        return(
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/impresiones" component={Impresiones} />
                    </Switch>
            </BrowserRouter>
        );
    }

export default App;