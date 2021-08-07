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

const SideBar = styled.div`
  width: 15%;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductsSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows :auto ;
`

export default class App extends React.Component {
  state = {
    products: [
      {name:'teste', price:500},
      {name:'teste', price:200},
    ],
    minprice: 100,
    maxprice: 1000,
    name: 'Teste'
  }


  onChangeMinPrice = (event) => {
    this.setState({ minprice: event.target.value })
  }
  onChangeMaxPrice = (event) => {
    this.setState({ maxprice: event.target.value })
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  showProducts = () => 
      this.state.products.map((product,index)=>{
      if(product.price >= this.state.minprice && product.price <= this.state.maxprice){
        return(
          <Produtos price={product.price} name={product.name} key={index} />
        )
      }
    })
  


  render() {
    return (
      <Wrapper>
        <Header>

        </Header>

        <Main>
          <SideBar>
            <Filtros

              minprice={this.state.minprice}
              maxprice={this.state.maxprice}
              name={this.state.name}
              changeminprice={this.onChangeMinPrice}
              changemaxprice={this.onChangeMaxPrice}
              changename={this.onChangeName}

            />
          </SideBar>

          <ProductsSection>
            {this.showProducts()}
          </ProductsSection>
        </Main>
      </Wrapper>
    )
  }
}