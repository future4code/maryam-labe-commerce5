import React from 'react';
import styled from 'styled-components';

const ViagemContainer = styled.div`
    border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 5px 2px 2px lightgray;
    padding: 20px;
    margin: 20px;
`

const ViagemFoto = styled.img`
    width: 100%;
`

const Botao = styled.button`
    border-radius: 3px;
    cursor: pointer;
`



export default function CardViagem (props) {
    return (
        <ViagemContainer> 
            <ViagemFoto src={props.produto.imagem} alt={'Paisagem do destino da viagem'}/>
            <p>{props.produto.texto}</p>
            <p>R$ {props.produto.valor.toFixed(2)}</p>
            <Botao>Adicionar ao carrinho</Botao>
        </ViagemContainer> 
        )
    };
