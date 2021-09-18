import React from "react";
import styled from "styled-components";
import Filtros from "./Filtros";

const FiltroVitrine = styled.nav`
  color: white;
  background-color: palevioletred;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
export function Home(props) {
  const arrayprodutos = props.produtos;
  return (
    <FiltroVitrine>
      <div>
        <p>Quantidade de produtos: {arrayprodutos.length}</p>
      </div>
      <span>
        <label for="ordenacao">Ordenar </label>
        <select
          name="order"
          value={props.ordem}
          onChange={props.onChangeOrdenarProdutos}
        >
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>
      </span>
    </FiltroVitrine>
  );
}
export default Home;
