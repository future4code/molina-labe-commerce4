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
const InputFilter = styled.input ` 
    border: none;
    border-bottom: 2px solid #5100B5;
    background-color: #12001e;
    color: white;
    margin: 10px;
`


export class FiltroValor extends React.Component {

    render(){
        return (
            <MenuFiltro>
                <h3>Filtros</h3>
                <ListaFiltro>
                    Valor mínimo:
                    <InputFilter 
                        type="number" 
                        value={this.props.minFilter}
                        onChange={this.props.onChangeMinFilter}
                    ></InputFilter>
                </ListaFiltro>
                <ListaFiltro>
                    Valor máximo:
                    <InputFilter 
                        type="number" 
                        value={this.props.maxFilter}
                        onChange={this.props.onChangeMaxFilter}
                    ></InputFilter>
                </ListaFiltro>
                <ListaFiltro>
                    Busca por nome:
                    <InputFilter 
                        type="text" 
                        value={this.props.nameFilter}
                        onChange={this.props.onChangeNameFilter}
                ></InputFilter>
                </ListaFiltro>
            </MenuFiltro>  
        )    
    }           
}

export default FiltroValor

