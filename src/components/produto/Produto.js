import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border-style: solid;
`
const Image = styled.img`
    width: 300px;
`

class Produtos extends React.Component{
    render(){
        return(
            <Wrapper>
                <Image src='https://i2.wp.com/excelenciaeducacao.com.br/wp-content/uploads/2021/01/placeholder.png?ssl=1' />
                <p>Nome</p>
                <p>Preço</p>

            </Wrapper>
        )
    }
}

export default Produtos