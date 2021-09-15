import React from 'react';
import styled from 'styled-components';



export default class CardViagem extends React.Component {

    render() {
        return (
            <div> 
                {this.props.imagem}
                {this.props.texto}
                {this.props.valor}
            </div> 
        )
    };
}