import React from 'react';
import styled from 'styled-components';
import { CardCarrinho } from './CardCarrinho';

    
const MenuFiltro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 300px;
    border-left-style: solid;
    border-left-width: thin;
    border-left-color: #5100B5;

`
const ListaCarrinhoContainer = styled.div`
    display: grid;
    gap: 16px 0;
`


class FiltroValor extends React.Component {
    getTotalValue = () => {
        let totalValue = 0 

        for(let product of this.props.productsInCart) {
            totalValue += product.valor * product.quantidade
        }

        return totalValue
    }
    

    render(){
        return (
            <MenuFiltro>
                    <h3>Carrinho</h3>
                    <ListaCarrinhoContainer>
                        {this.props.productsInCart.map((product) => {
                            return <CardCarrinho 
                                cartItem={product}
                                onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                            />                         
                        })}
                        
                    </ListaCarrinhoContainer>
                    <p>Valor total: R${this.getTotalValue()},00 </p>
            </MenuFiltro>  
        )    
    }           
}

export default FiltroValor
