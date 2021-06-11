import React from 'react'
import './App.css';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import FiltroValor from './components/filtroValor/FiltroValor'
import Footer from './components/footer/Footer'
import Produto from './components/produto/Produto'
import FiltroOrdem from './components/filtroOrdem/FiltroOrdem'
import Carrinho from './components/carrinho/Carrinho'
import Banner from './components/banner/banner'

const GlobalStyle = createGlobalStyle`
  

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #0d001d;
    color: #fffeff;
  }

  main {
    /* min-height: 80%; */
    display: flex;
    justify-content: space-between;
}

  h3 {
    color: #d72d00;
  }

  `

const SessaoProdutos = styled.div `
 padding: 0px;
 flex-grow: 1;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-template-rows: repeat(4, 270px 20px);
`





class App extends React.Component {
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

  


  render(){

    /* const renderizaProduto = this.state.produtoArray.map(({foto, nome, valor}) => {
      return (
        <Produto
          fotoProduto={foto.fotoProduto}
          nomeProduto={nome.nomeProduto}
          valorProduto={valor.valorProduto}
        />
      ) 
    }) */

    const enderizaProduto = this.state.produtoArray.map((foto, nome, valor)=>{
      return(
        <produto
          fotoProduto={foto.fotoProduto}
          nomeProduto={nome.nomeProduto}
          valorProduto={valor.valorProduto}
        />
      )
   })
   

      return (
        <div>
          <GlobalStyle />
          <Header></Header>
          <Banner></Banner>
              <main>
            <FiltroValor />
            <div>
            <FiltroOrdem /> 

              

            <SessaoProdutos>
               
            </SessaoProdutos>
          
            </div>
            <Carrinho />           
            </main>
          <Footer />
      </div>
      )
  }
}

export default App;
