import React from 'react';
import styled from 'styled-components'

const ItemContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
    align-items: center;
    background-color: #5100B5;
    border-radius: 25%;
    padding: 0 5px;
`


export class CardCarrinho extends React.Component {
    

    render() {
        return(
            <ItemContainer>
               <p>{this.props.cartItem.quantidade}</p>
               <p>{this.props.cartItem.name}</p>
               <button 
                onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
               >
                   Remover
                </button> 
            </ItemContainer>
        )
    }
}