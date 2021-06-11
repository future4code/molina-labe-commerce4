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

    render(){
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
                 <Produto />
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
