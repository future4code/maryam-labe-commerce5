import React, { Component } from "react";
import Carrinho from "./components/Carrinho";
import Filtros from "./components/Filtros";
import Home from "./components/Home";
import CardViagem from "./components/CardViagem";
import styled from "styled-components";
import plutao from "./components/img/sun-seen-from-pluto.jpg";
import tritao from "./components/img/sun-seen-from-triton-neptune.jpg";
import saturno from "./components/img/sun-seen-from-saturn.jpg";
import ariel from "./components/img/sun-seen-from-ariel-uranus.jpg";
import europa from "./components/img/sun-seen-from-europa.jpg";
import marte from "./components/img/sun-seen-from-mars.jpg";
import venus from "./components/img/sun-seen-from-venus.jpg";
import mercurio from "./components/img/sun-seen-from-mercury.jpg";
import trappist from "./components/img/Trappist-1E.png";

const LayoutGeral = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  text-align: center;
`;

const Header = styled.div`
  font-family: garamond;
  background-image: linear-gradient(to right, gray, pink);
  color: white;
  grid-column: 1 / span 4;
`;

const CatalogoViagem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  text-align: center;
`;
export default class App extends Component {
  state = {
    produtos: [
      {
        id: 1,
        imagem: plutao,
        texto: "O Sol e Caronte vistos da superfície de Plutão",
        valor: 150000,
      },
      {
        id: 2,
        imagem: tritao,
        texto: "Veja o Sol e Netuno vistos a partir da lua Tritão",
        valor: 145000,
      },
      {
        id: 3,
        imagem: saturno,
        texto:
          "Saturno, uma das mais românticas paisagens! Consulte nossa opção exclusiva para casais",
        valor: 175000,
      },
      {
        id: 4,
        imagem: ariel,
        texto: "Urano e o Sol vistos a partir da superfície da lua Ariel",
        valor: 130000,
      },
      {
        id: 5,
        imagem: europa,
        texto:
          "O Sol forma um halo ao redor de Júpiter, vistos da superfície de Europa",
        valor: 90000,
      },
      {
        id: 6,
        imagem: marte,
        texto:
          "Visite Marte onde temos a maior colônia, ótima opção para passar aquele período sabático conosco",
        valor: 150000,
      },
      {
        id: 7,
        imagem: venus,
        texto:
          "Vênus, a viagem mais curta de nosso catálogo e também uma das mais inesquecíveis",
        valor: 75000,
      },
      {
        id: 8,
        imagem: mercurio,
        texto: "Uma paisagem de tirar o fôlego, conheça Mercúrio!",
        valor: 80000,
      },
      {
        id: 9,
        imagem: trappist,
        texto:
          "Venha para Estrela TRAPPIST-1 localizada na constelação de Aquário, atmosfera semelhante com a da Terra",
        valor: 250000,
      },
    ],
    sortingParameter: "valor",
    ordem: 1,
    valorMinimo: "",
    valorMaximo: "",
    buscaPorNome: "",
  };

  onChangeOrdenarProdutos = (event) => {
    this.setState({ ordem: event.target.value });
  };

  adicionarCarrinho = (id) => {};

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };
  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };
  onChangeBuscaPorNome = (event) => {
    this.setState({ buscaPorNome: event.target.value });
  };
  // --------------------------------------------------------------------
  // adicionarCarrinho = (produtoId) => {
  //   const produtosNoCarrinho = this.state.produtosNoCarrinho.find(
  //     (produto) => produtoId === produto.id
  //   );

  //   if (produtosNoCarrinho) {
  //     const novoProdutosNoCarrinho = this.state.produtosNoCarrinho.map(
  //       (produto) => {
  //         if (produtoId === produto.id) {
  //           return {
  //             ...produto,
  //             quantidade: produto.quantidade + 1,
  //           };
  //         }

  //         return produto;
  //       }
  //     );

  //     this.setState({ produtosNoCarrinho: novoProdutosNoCarrinho });
  //   } else {
  //     const produtoToCarrinho = produtos.find(
  //       (produto) => produtoId === produto.id
  //     );

  //     const novoProdutosNoCarrinho = [
  //       ...this.state.produtosNoCarrinho,
  //       { ...produtosToCarrinho, quantidade: 1 },
  //     ];

  //     this.setState({ produtosNoCarrinho: novoProdutosNoCarrinho });
  //   }
  // };

  // removerDoCarrinho = (produtoId) => {
  //   const novoProdutosNoCarrinho = this.state.produtosNoCarrinho
  //     .map((produto) => {
  //       if (produto.id === produtoId) {
  //         return {
  //           ...produto,
  //           quantidade: produto.quantidade - 1,
  //         };
  //       }
  //       return produto;
  //     })
  //     .filter((produto) => produto.quantidade > 0);

  //   this.setState({ produtosNoCarrinho: novoProdutosNoCarrinho });
  // };

  render() {
    return (
      <LayoutGeral>
        <Header>
          <h1>INTERESTELAR</h1>
          <h2>Sua próxima viagem está aqui</h2>
        </Header>
        <Filtros
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscaPorNome={this.state.buscaPorNome}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscaPorNome={this.onChangeBuscaPorNome}
        />
        <div>
          <Home
            produtos={this.state.produtos}
            ordem={this.state.ordem}
            onChangeOrdenarProdutos={this.onChangeOrdenarProdutos}
          />
          <CatalogoViagem>
            {this.state.produtos
              .filter((produto) => {
                return (
                  this.state.valorMinimo === "" ||
                  produto.valor >= this.state.valorMinimo
                );
              })
              .filter((produto) => {
                return (
                  this.state.valorMaximo === "" ||
                  produto.valor <= this.state.valorMaximo
                );
              })
              .filter((produto) => {
                return produto.texto
                  .toLowerCase()
                  .includes(this.state.buscaPorNome.toLowerCase());
              })
              .sort((a, b) => {
                return this.state.ordem * (a.valor - b.valor);
              })
              .map((produto) => {
                return (
                  <CardViagem
                    key={produto.id}
                    produto={produto}
                    adicionarCarrinho={this.adicionarCarrinho}
                  />
                );
              })}
          </CatalogoViagem>
        </div>
        <h3>Carrinho</h3>
        {/* <Carrinho
        produtosNoCarrinho={this.state.produtosNoCarrinho}
        removerDoCarrinho={this.removerDoCarrinho}
        />  */}
      </LayoutGeral>
    );
  }
}
