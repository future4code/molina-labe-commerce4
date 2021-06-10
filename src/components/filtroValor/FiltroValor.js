import React from 'react';
import styled from 'styled-components';

const ListaFiltro = styled.label`
    margin: 10px;
`
const MenuFiltro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 200px;
    border-right-style: solid ;
    border-right-width: thin;
    border-right-color: #5100B5;
`



class FiltroValor extends React.Component {

    render(){
        return (
            <MenuFiltro>
                    <h3>Filtros</h3>
                    <ListaFiltro>
                    Valor mínimo:
                    <input type="number" value></input>
                    </ListaFiltro>
                    <ListaFiltro>
                    Valor máximo:
                    <input type="number" value></input>
                    </ListaFiltro>
                    <ListaFiltro>
                    Busca por nome:
                    <input type="text" value="Produto"></input>
                    </ListaFiltro>
            </MenuFiltro>  
        )    
    }           
}

export default FiltroValor

