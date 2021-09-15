import React from 'react';
import Filtros from './components/Filtros';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import styled from 'styled-components';


const LayoutGeral = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

function App() {
  return (
    <LayoutGeral>
      {/* <Filtros /> */}
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
        atin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden
        -Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
         passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
         Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good
         and Evil by H. Rackham.</p>
      <Home />
      {/* <Carrinho /> */}
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
        atin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden
        -Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
         passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
         Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good
         and Evil by Cicero, wriranslation by H. Rackham.</p>
    </LayoutGeral>
  );
}

export default App;
