import React from 'react';
import styled from 'styled-components';

const FiltroVitrine = styled.nav`
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`


export default class Home extends React.Component {
    

    render() {
        return (
            <nav> 
            <FiltroVitrine> 
                <p>Quantidade de produtos:</p>
                <p>Ordenação:</p>
            </FiltroVitrine>
            <div>

            </div>
            </nav>
        )
    };
}