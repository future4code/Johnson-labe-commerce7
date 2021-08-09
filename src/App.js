import React from 'react';
import styled from 'styled-components';
import Filtros from './components/Filters';
import Cart from './components/Cart';
import ProductsSection from './components/ProductsSection';

const Wrapper = styled.div`
  height: 100vh;

`

const Header = styled.div`
  height:15%;
  border:solid;
  background-color: darkblue;
`
const Main = styled.div`
  display: flex;
  height: 100%;
  background-color: yellow;
`





export default class App extends React.Component {
  state = {
    cart: [],
    minprice: 0,
    maxprice: 1000,
    name: 'Nome'
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


  updateCart = (newcart) => {
    this.setState({ cart: newcart })
    console.log(this.state.cart)
  }

  addToCart = (product) => {
    const array = [...this.state.cart]
    array.push(product)
    this.setState({
      cart: array
    })

  }
  onChangeOption = (event) => {
    this.setState({
        order: event.target.value
    })

}

  render() {



    return (

      <Wrapper>

        <Header>
        </Header>

        <Main>

            <Filtros

              minprice={this.state.minprice}
              maxprice={this.state.maxprice}
              name={this.state.name}
              changeminprice={this.onChangeMinPrice}
              changemaxprice={this.onChangeMaxPrice}
              changename={this.onChangeName}

            />

            <ProductsSection
             onChange={this.onChangeOption}
              addToCart={this.addToCart}
              minprice={this.state.minprice}
              maxprice={this.state.maxprice}
              name={this.state.name}
            />

            <Cart
              cart={this.state.cart}
            />

        </Main>
      </Wrapper>
    )
  }
}