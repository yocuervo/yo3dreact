import React from 'react';

import './styles/Modelos.css';
import PageLoading from './PageLoading';
import api from '../Api';

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

        return (

            <div className="row row-cols-1 row-cols-md-2 modelos__row">

                <div className="col modelos__col">
                    <img src={this.props.img} alt="Imagen del Modelo" />
                    <h5>Nombre: {this.props.nombre}</h5>
                    <h5>Alto: {this.props.alto}cm</h5>
                    <h5>Ancho: {this.props.ancho}cm</h5>
                    <h5>Largo: {this.props.largo}cm</h5>
                    <h5>Precio: ${this.props.precio}</h5>
                    <h5>Creador del Modelo</h5>
                    <h5>{this.props.creadorModelo}</h5>
                    <h5>Pintor del Modelo</h5>
                    <h5>{this.props.artistaModelo}</h5>
                </div>

            </div>
        )
    }
}

export default Modelos;