import React from 'react'
import styled from 'styled-components'
import ProductBox from './ProductBox'


const Products = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%  ;
  grid-template-rows: 38% 38%;
  height: 100%;
  width: 100%;   
  background-color: yellow;
`
const Contador = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 4%;
`

const Teste = styled.div`
    width: 100%;
`
class ProductsSection extends React.Component {
    state = {
        products: [

            { name: 'Roupa de Astronauta', price: 400, image: 'https://picsum.photos/200/200?a=1' },
            { name: 'Fragmento de asteróide', price: 350, image: 'https://picsum.photos/200/200?a=2' },
            { name: '3', price: 110, image: 'https://picsum.photos/200/200?a=3' },
            { name: '4', price: 480, image: 'https://picsum.photos/200/200?a=4' },
            { name: '5', price: 330, image: 'https://picsum.photos/200/200?a=5' },
            { name: '6', price: 800, image: 'https://picsum.photos/200/200?a=6' },
            { name: '7', price: 850, image: 'https://picsum.photos/200/200?a=7' },


        ],
        quantity: 0,
        order: 'Crescente',
    }

    orderProducts = () => {

        if (this.state.order === 'Crescente') {

            this.state.products.sort((a, b) => (a.price > b.price) ? 1 : -1)

        } else {
            this.state.products.sort((a, b) => (a.price < b.price) ? 1 : -1)

        }
    }



    showProducts = () => 
        this.state.products.map((product, index) => {
            let nametruefalse = true
            this.orderProducts()

            if (product.name.includes(this.props.name)) {
                nametruefalse = false
                return (
                    <ProductBox name={product.name} price={product.price} image={product.image} onclick={() => this.props.addToCart(product)} key={index} />
                )
            } else if (product.price >= this.props.minprice && product.price <= this.props.maxprice && nametruefalse === true) {
                return (
                    <ProductBox name={product.name} price={product.price} image={product.image} onclick={() => this.props.addToCart(product)} key={index} />
                )

            }

        })

    

    onChangeOption = (event) => {
        this.setState({
            order: event.target.value
        })

    }

    render() {

        return (
            <Teste>
                <Contador>
                    <p>Quantidade de itens:</p>
                    <select onChange={this.onChangeOption}>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </Contador>
                <Products>
                    {this.showProducts()}
                </Products>
            </Teste>
        )

    }
}

export default ProductsSection