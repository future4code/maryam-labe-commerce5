// import React from "react";

// export default class CarrinhoItem extends React.Component {
//   render (){
//     return (
//       <div>
//         <p>{this.props.quantidade} x {this.props.titulo}</p>
//       </div>
//     )
//   }
// }

import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
`


export class CarrinhoItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.ItemCarrinho.quantidade}x</p>
      <p>{this.props.ItemCarrinho.nome}</p>
      <button 
        onClick={() => this.props.removerDoCarrinho(this.props.ItemCarrinho.id)}
      >
        Remover
      </button>
    </ItemContainer>
  }
}
