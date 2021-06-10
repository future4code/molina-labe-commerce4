import React from 'react';
import styled from 'styled-components';

    
const MenuCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 300px;
    border-left-style: solid;
    border-left-width: thin;
    border-left-color: #5100B5;

`



class FiltroValor extends React.Component {

    render(){
        return (
            <MenuCarrinho>
                    <h3>Carrinho</h3>
                    <p>1x Produto4</p>
                    <button>Remover</button>
                    <p>Valor total:</p>
            </MenuCarrinho>  
        )    
    }           
}

export default FiltroValor
