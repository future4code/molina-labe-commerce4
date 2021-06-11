import React from 'react';
import styled from 'styled-components';

const MenuFiltro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 5px;
`

class FiltroOrdem extends React.Component{
    render(){
        return(
        <MenuFiltro>
            <div>
            <p>Quantidade de Produtos: </p>
            </div>
            <div>
            <label>
                Ordenação:
                <select>
                    <option value="CRESCENTE">Crescente</option>
                    <option value="DECRESCENTE">Drecrescente</option>

                </select>

            </label>
            </div>
        </MenuFiltro>)

    }


}
 export default FiltroOrdem