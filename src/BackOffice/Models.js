import React from 'react';

import './Styles/Models.css';

class Models extends React.Component {
    render() {
        return(
            <div className="models__container">
                <p> {this.props.models.nombre} <br />
                    {this.props.models.alto} <br />
                    {this.props.models.ancho} <br />
                    {this.props.models.largo} <br />
                    {this.props.models.precio} <br />
                    {this.props.models.creadorModelo} <br />
                    {this.props.models.artistaModelo} <br />
                </p>
            </div> 
            )
    }
}

export default Models;