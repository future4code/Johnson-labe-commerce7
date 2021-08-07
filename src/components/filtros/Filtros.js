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
    
    
    
    render() {
        return (
            <Wrapper>
                <Inputs value={this.props.minprice} onChange={this.props.changeminprice} placeholder='Preço minimo' />
                <Inputs value={this.props.maxprice} onChange={this.props.changemaxprice} placeholder='Preço Máximo' />
                <Inputs value={this.props.name} onChange={this.props.changename} placeholder='Nome do produto'/>

            </Wrapper>
        )
    }
}

export default Filtros