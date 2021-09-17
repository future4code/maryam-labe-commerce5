import React from "react";

export default function Filtros(props) {
  return (
    <containerFiltro>
      <h3>Filtro</h3>
      <p>Valor Mínimo</p>
      <input
        placeholder="Pesquise aqui"
        type="number"
        value={props.valorMinimo}
        onChange={props.onChangeValorMinimo}
      />
      <p>Valor máximo</p>
      <input
        placeholder="Pesquise aqui"
        type="number"
        value={props.valorMaximo}
        onChange={props.onChangeValorMaximo}
      />
      <p>Busca por nome</p>
      <input
        placeholder="Pesquise aqui"
        type="text"
        value={props.buscaPorNome}
        onChange={props.onChangeBuscaPorNome}
      />
    </containerFiltro>
  );
}
