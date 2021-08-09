import React from 'react'
import styled from 'styled-components'

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 20%;
    margin-left:auto;
`

const CartList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5px;
`

const Product = styled.div`
    display: flex;
    width: 80%;
    border: solid;
    `

const Text = styled.p`
    margin: 1px;
`

const Image = styled.img`
    width: 50px;
`

class Cart extends React.Component {
    showCart = () =>
        this.props.cart.map((product) => {
            return (
                <CartList>
                    <Product>
                        <Image src={product.image} />
                        <div>
                            <Text>{product.name}</Text>
                            <Text>Quantidade:{product.price}</Text>
                        </div>
                    </Product>
                </CartList>
            )
        })



    render() {
        return (
            <CartWrapper>
                <h3>Carrinho</h3>

                {this.showCart()}

                <button>Comprar</button>
            </CartWrapper>
        )
    }
}


export default Cart