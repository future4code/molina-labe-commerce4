import React from 'react'
import './App.css';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import FiltroValor from './components/filtroValor/FiltroValor'
import Footer from './components/footer/Footer'
import Produto from './components/produto/Produto'
import FiltroOrdem from './components/filtroOrdem/filtroOrdem'



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  main {
    /* min-height: 80%; */
    display: flex;
}
  `

const SessaoProdutos = styled.div `
 padding-left: 20px;
 padding-top: 20px;
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
                <main>
             <FiltroValor />
             <FiltroOrdem /> 
    
             <SessaoProdutos>
                 <Produto />
                 <Produto />
                 <Produto />
                 <Produto />
                 <Produto />
                 <Produto />
                 <Produto />
                 <Produto />
             </SessaoProdutos>
    
                    <div> {/* CARRINHOS */}
    
                    </div>
                </main>
            <Footer />
        </div>
        )
    }
}

export default App;
