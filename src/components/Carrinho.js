import CardViagem from './components/cardViagem';
import styled from 'styled-components';
import plutao from './components/img/sun-seen-from-pluto.jpg';
import tritao from './components/img/sun-seen-from-triton-neptune.jpg';
import saturno from './components/img/sun-seen-from-saturn.jpg';
import ariel from './components/img/sun-seen-from-ariel-uranus.jpg';
import europa from './components/img/sun-seen-from-europa.jpg';
import marte from './components/img/sun-seen-from-mars.jpg';
import venus from './components/img/sun-seen-from-venus.jpg';
import mercurio from './components/img/sun-seen-from-mercury.jpg';
import trappist from './components/img/Trappist-1E.png';
import Home from './Home'

import React from 'react';
import CarrinhoItem from './CarrinhoItem';


class Carrinho extends React.Component {

  state = {
    produtos: [
       {   id: 1,
           imagem: plutao,
           texto: "O Sol e Caronte vistos da superfície de Plutão",
           valor: 150000,
       },
       {   id: 2,
           imagem: tritao,
           texto: "Veja o Sol e Netuno vistos a partir da lua Tritão",
           valor: 145000,
       },
       {   id: 3,
           imagem: saturno,
           texto: "Uma das mais românticas paisagens, consulte nossa opção exclusiva para casais",
           valor: 175000,
       },
       {   id: 4,
           imagem: ariel,
           texto: "Urano e o Sol vistos a partir da superfície da lua Ariel",
           valor: 130000,
       },
       {   id: 5,
           imagem: europa,
           texto: "O Sol forma um halo ao redor de Júpiter, vistos da superfície de Europa",
           valor: 90000,
       },
       {   id: 6,
           imagem: marte,
           texto: "Ontem temos a maior colônia, ótima opção para passar aquele período sabático conosco",
           valor: 150000,
       },
       {   id: 7,
           imagem: venus,
           texto: "Vênus, a viagem mais curta de nosso catálogo e também uma das mais inesquecíveis",
           valor: 75000,
       },
       {   id: 8,
           imagem: mercurio,
           texto: "Paisaegm de tirar o fôlego conheça Mercúrio",
           valor: 80000,
       },
       {   id: 9,
           imagem: trappist,
           texto: "Estrela TRAPPIST-1 localizada na constelação de Aquário, atmosfera semelhante com a da Terra",
           valor: 250000,
       },
     ],
     ordem: "asc"  
   }

   adicionarCarrinho = () => {
     const listaProdutos = this.state.produtos.map((produto) => {
       return (
         <CarrinhoItem
          quantidade={'1'}
          descrição={this.produto.titulo}
        />
       )
     })
     return listaProdutos;
   }




  // state = {
  //   adicionado: false,
  //   numeroItens: 0,

  // }
  // adicionarCarrinho = () => {
  //   let itensAoCarrinho

  //   if(this.state.adicionado) {
  //     itensAoCarrinho = this.state.numeroItens - 1
  //   } else {
  //     itensAoCarrinho = this.state.numeroItens + 1
  //   }

  //   this.setState({
  //     adicionado: !this.state.adicionado,
  //     numeroItens:itensAoCarrinho
  //   })

  // }

  // render() {
  //   return (
  //     <div>

  //       <button>Remover Item</button>
  //     </div>
  //   );

  // }
}

export default Carrinho