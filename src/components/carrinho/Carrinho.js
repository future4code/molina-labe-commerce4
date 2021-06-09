import React from 'react';
import styled from 'styled-components';

const ListaFiltro = styled.label`
    margin: 10px;
`
const MenuFiltro = styled.div`
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
            <MenuFiltro>
                    <h3>Carrinho</h3>
                    <p>1x Produto4</p>
                    <button>Remover</button>
                    <p>Valor total:</p>
            </MenuFiltro>  
        )    
    }           
}

export default FiltroValor
