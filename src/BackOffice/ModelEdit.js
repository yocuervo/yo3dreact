import React from 'react';

import '../BackOffice/Styles/ModelEdit.css';
import api from '../Api';
import PageLoading from '../components/PageLoading';
import ModelForm from './ModelForm';

class ModelEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        piezas: {
            nombre:'',
            alto:'',
            ancho:'',
            largo:'',
            precio:'',
            creadorModelo:'',
            artistaModelo:''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.modelos.read(
                this.props.match.params.modeloId
            )

            this.setState({ loading: false, modelos: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    handleChange = e => {
        this.setState({
            piezas: {
                ...this.state.piezas,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null });

        try {
            await api.modelos.update(this.props.match.params.modeloId, this.state.piezas);
            this.setState({ loading: false });

            this.props.history.push('/modelslist');
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    render() {
            if (this.state.loading) {
                return <PageLoading />;
            }
            
            return(
                <div className="container-fluid Modelnew__container">
                    <div className="ModelNew__titulo">Editar Producto</div>
                    <ModelForm 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.piezas}
                        error={this.state.error}
                    />
                </div>
        );
    }
}

export default ModelEdit;