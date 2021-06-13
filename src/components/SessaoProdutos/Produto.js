import React from 'react';
import styled from 'styled-components';


const Produtos = styled.div `
    display: grid;
    margin: 5px;
    padding: 5px;
    background-color: #040817;
    transition: 1s;

    &:hover {
        border: 2px solid #d72d00;
        background-color: #1e1942;
        border-radius: 5%;
    }

    `
    
const ProdutosImg = styled.img `
    
    width: 100%;
    height: 175px;

`

const ProdutosInfo = styled.div ` 
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`
const ButtonProdutos = styled.button ` 
    background-color: white;
    color: #5100B5;
    border: 1px solid #5100B5;
    border-radius: 20%;
    height: 35px;
    &:hover {
        background-color: #5100B5;
        color: white;
    }
`

class Produto extends React.Component {
    render() {
        const product = this.props.product
        return (
                <Produtos>
                    <ProdutosImg src={product.img} alt="" />
                    <ProdutosInfo>
                        <h3>{product.name}</h3>
                        <p>R$ {product.valor},00</p>
                        <ButtonProdutos onClick={() => this.props.onAddProductToCart(product.id)}>
                            Adcionar ao carrinho
                        </ButtonProdutos>
                    </ProdutosInfo>
                    
                </Produtos>
        )
    }
}

export default Produto