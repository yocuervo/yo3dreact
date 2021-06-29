import React from 'react';

import PageLoading from './PageLoading';
import api from '../Api';
import ModelsDetail from './ModelsDetail';

class Modelos extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.modelos.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading === true) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }
        
            for (const step = 0; step < 1; step++) {

                return (           
                        <ModelsDetail model={this.state.data[step]} />
                );
            }
       
           {/* Cada uno de los Modelos deberian ser dinamicos, de manera que se rendericen por cada Array en el DB */}

    }
}

export default Modelos;