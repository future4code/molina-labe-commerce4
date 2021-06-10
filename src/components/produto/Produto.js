import React from 'react';
import styled from 'styled-components';

const Produtos = styled.div `
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    
    align-items: start;
    justify-items: stretch;
    padding: 10px;
    `

const ProdutosImg = styled.img `
    width: 100%;
    height: 200px;
    border-radius: 35%;
    transition: 1s;
    &:hover {
        border: 2px solid #d72d00;
    }
`



class Produto extends React.Component {
    render() {
        return (
  
                <Produtos>
                    <ProdutosImg src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>titulo</h4>
                </Produtos>
        )
    }
}

export default Produto