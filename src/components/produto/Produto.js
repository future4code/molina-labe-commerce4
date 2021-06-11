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
        produtoArray: [
            {
                nomeProduto: "Marte",
                valorProduto: 500,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "Jupiter",
                valorProduto: 5000,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "Saturno",
                valorProduto: 7500,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "Netuno",
                valorProduto: 5900,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "Urano",
                valorProduto: 5400,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "venus",
                valorProduto: 500880,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "Marte",
                valorProduto: 50110,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            },
            {
                nomeProduto: "sol",
                valorProduto: 53200,
                adicionadaCarrinho: false,
                fotoProduto: 'https://picsum.photos/50/50'
            }

        ]
    }

    const renderizaProduto = this.state.produtoArray.map()

    // const Cards = camisetas.map(({img, titulo, preco}) => {
    //     return (
    //       <Produtos
    //         img={img}
    //         titulo={titulo}
    //         preco={preco}
    //       />
    //     ) 
    //   })

    render() {
        return (
                <ProdutoCard>
                    <ProdutosImg src={this.props.fotoProduto} alt={""} />
                    <ProdutoConteudo>
                {this.state.produtoArray.map}
                    </ProdutoConteudo>
                </ProdutoCard>
        )
    }
}

export default Produto