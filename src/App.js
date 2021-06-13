import React from 'react'
import './App.css';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import mercurio from './images/mercurio.png';
import venus from './images/venus.png';
import marte from './images/marte.png';
import jupiter from './images/jupiter.png';
import saturno from './images/saturn2.png';
import uranio from './images/uranio.png';
import netuno from './images/netuno.png'
import plutao from './images/plutao.png'
import Header from './components/Header/Header';
import FiltroValor from './components/FiltroValor/FiltroValor'
import Footer from './components/Footer/Footer'
import Carrinho from './components/Carrinho/Carrinho'
import Banner from './components/Banner/Banner'
import SessaoProdutos from './components/SessaoProdutos/SessaoProdutos';

const GlobalStyle = createGlobalStyle`
  

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #0d001d;
    color: #fffeff;
  }

  

  h3 {
    color: #d72d00;
  }
  `

const MainContainer = styled.main ` 
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr 1fr;
`

const products = [
  {
      id: 1,
      name: 'Mercurio',
      valor: 100,
      img: mercurio ,
      quantidade: 1
  },

  {
      id: 2,
      name: 'Venus',
      valor: 130,
      img: venus,
      quantidade: 1
  },

  {
      id: 3,
      name: 'Marte',
      valor: 100,
      img: marte,
      quantidade: 1
  },

  {
      id: 4,
      name: 'Jupiter',
      valor: 150,
      img: jupiter,
      quantidade: 1
  },
  {
      id: 5,
      name: 'Saturno',
      valor: 200,
      img: saturno,
      quantidade: 1
  },

  {
      id: 6,
      name: 'Urano',
      valor: 300,
      img: uranio,
      quantidade: 1
  },

  {
      id: 7,
      name: 'Netuno',
      valor: 400,
      img: netuno,
      quantidade: 1
  },

  {
      id: 8,
      name: 'Plutão',
      valor: 500,
      img: plutao,
      quantidade: 1
  }
]

class App extends React.Component {
  state = {
    minFilter: '10',
    maxFilter: '10000000',
    nameFilter: '',
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantidade: product.quantidade + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantidade: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantidade: product.quantidade - 1
        }
      }
      return product
    }).filter((product) => product.quantidade > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  

  render(){
     return (
        <div>
          <GlobalStyle />
          <Header />
          <Banner />
          <MainContainer>
            <FiltroValor 
              minFilter={this.state.minFilter}
              maxFilter={this.state.maxFilter}
              nameFilter={this.state.nameFilter}
              onChangeMinFilter={this.onChangeMinFilter}
              onChangeMaxFilter={this.onChangeMaxFilter}
              onChangeNameFilter={this.onChangeNameFilter}
            />
            <SessaoProdutos 
              products={products}
              minFilter={this.state.minFilter}
              maxFilter={this.state.maxFilter}
              nameFilter={this.state.nameFilter}
              onAddProductToCart={this.onAddProductToCart}
            />
            <Carrinho 
              productsInCart={this.state.productsInCart}
              onRemoveProductFromCart={this.onRemoveProductFromCart}
            />          
          </MainContainer>
        <Footer />
    </div>
    )
  }
}

export default App;
