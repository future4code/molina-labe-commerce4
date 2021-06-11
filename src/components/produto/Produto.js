import React from 'react';
import styled from 'styled-components';

const ProdutoCard = styled.div `
    display: flex;
    flex-direction: column;
    /* grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr; */
    align-items: center;
    /* justify-items: stretch; */
    padding: 10px;
    `

const ProdutosImg = styled.img `
    width: 100%;
    /* height: 200px; */
    border-radius: 35%;
    /* transition: 1s;
    &:hover {
        border: 2px solid #d72d00;
    } */
`

const ProdutoConteudo = styled.div `
    display: flex;
    align-items: center;
`

const TituloProduto = styled.div `
    margin-right: 20px;
`


class Produto extends React.Component {
    state = {
        nomeProduto: "Marte",
        valorProduto: 500,
        adicionadaCarrinho: false
      }

    render() {
        return (
  
                <ProdutoCard>
                    <ProdutosImg src={this.props.fotoProduto} alt={""} />
                    <ProdutoConteudo>
                    <TituloProduto>
                    <h4>{this.state.nomeProduto}</h4>
                    </TituloProduto>
                    <p>R${this.state.valorProduto}</p>
                    </ProdutoConteudo>
                </ProdutoCard>
        )
    }
}

export default Produto