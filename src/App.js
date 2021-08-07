import React from 'react';
import styled from 'styled-components';
import Filtros from './components/filtros/Filtros';
import Produtos from './components/produto/Produto';

const Wrapper = styled.div`
  height: 100vh;
`

const Header = styled.div`
  height:15%;
  border:solid;
  background-color: green;
`
const Main = styled.div`
  display: flex;
  height: 85%;
  background-color: yellow;
`

const MenuEsquerdo = styled.div`
  width: 15%;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component{
  render(){
    return(
      <Wrapper>
        <Header>

        </Header>

        <Main>
            <MenuEsquerdo>
                <Filtros/>
            </MenuEsquerdo>

            <div>
                <Produtos/>
            </div>
        </Main>
      </Wrapper>
      )
  }
}