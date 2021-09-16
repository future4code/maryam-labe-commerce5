import React from 'react';
import styled from 'styled-components';

const ViagemContainer = styled.div`
    
`

const ViagemFoto = styled.img`
    width: 300px;
`

const ViagemTexto= styled.p``



export default function CardViagem (props) {
    return (
        <ViagemContainer> 
            <ViagemFoto src={props.produto.imagem} alt={'Paisagem do destino da viagem'}/>
            <p>{props.produto.texto}</p>
            <p>{props.produto.valor.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
        </ViagemContainer> 
        )
    };
