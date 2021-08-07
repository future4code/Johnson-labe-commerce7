import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Inputs = styled.input`
    border-style: solid;
    border-color: black;
    border-radius: 15px;
    border-width: 1px;
    padding: 7px;
    margin: 10px 0;

    :focus{
        outline: none;
    }
`

class Filtros extends React.Component {
    state ={
        maxprice:0,
        minprice:0,
        name:''
    }

    onChangeMinPrice(event){
        this.setState({minprice:event.target.value})
    }
    onChangeMaxPrice(event){
        this.setState({maxprice:event.target.value})
    }
    onChangeName(event){
        this.setState({name:event.target.value})
    }
    render() {
        return (
            <Wrapper>
                <Inputs value={this.state.minprice} onChange={this.onChangeMinPrice} placeholder='Preço minimo' />
                <Inputs value={this.state.maxprice} onChange={this.onChangeMaxPrice} placeholder='Preço Máximo' />
                <Inputs value={this.state.name} onChange={this.onChangeName} placeholder='Nome do produto'/>

            </Wrapper>
        )
    }
}

export default Filtros