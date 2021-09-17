import React from "react";

export default class CarrinhoItem extends React.Component {
  render (){
    return (
      <div>
        <p>{this.props.quantidade} x {this.props.titulo}</p>
      </div>
    );
  }
}