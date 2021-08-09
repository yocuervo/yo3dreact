import React from 'react';

import PageLoading from './PageLoading';
import api from '../Api';
import ModelsDetail from './ModelsDetail';

class Models extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {
            modelos: []
        }
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

        return (
            <React.Fragment>    
                {this.state.data.map(model => (      
                    <ModelsDetail model={model} key={model.id} />
                    )).reverse()
                }
            </React.Fragment>
        )

    }
}

export default Models;