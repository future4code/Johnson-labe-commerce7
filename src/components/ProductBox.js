import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border-style: solid;
    border-radius: 10px;
    height: 90%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;

    
`
const Image = styled.img`
    width: 100%;
`
const Text = styled.p`
    margin: 2px;
`
const Button =styled.button`
    height: 100%;
`
class ProductBox extends React.Component {

    render() {
        return (
            <Wrapper>
                <Image src={this.props.image} />
                <Text>{this.props.name}</Text>
                <Text>{this.props.price}</Text>
                <Button onClick={this.props.onclick}>Comprar</Button>
            </Wrapper>
        )
    }
}

export default ProductBox