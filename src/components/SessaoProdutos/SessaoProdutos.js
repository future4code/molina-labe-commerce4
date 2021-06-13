import React from 'react';
import styled from 'styled-components'
import Produto from './Produto';


const SessaoProduto = styled.div `
 padding: 10px;
 flex-grow: 1;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
`

const MenuFiltro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 5px;
    
`



export class SessaoProdutos extends React.Component {

    state = {
        sort: 'DECRESCENTE'
    }
    
    getFilteredAndOrderedList = () => {
        return this.props.products
          .filter((product) => product.valor < this.props.maxFilter)
          .filter((product) => product.valor > this.props.minFilter)
          .filter((product) => product.name.includes(this.props.nameFilter))
          .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.valor - b.valor : b.valor - a.valor)
    }

    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
    }  
    
    render () {
        const filteredAndOrderedList = this.getFilteredAndOrderedList()
        console.log(filteredAndOrderedList)
        return(
            <div>
                <MenuFiltro>
                    <div>
                    <p>Quantidade de Produtos: {filteredAndOrderedList.length}</p>
                    </div>
                    <div>
                        <label>
                            Ordenação:
                            <select value={this.state.sort} onChange={this.onChangeSort}>
                                <option value='CRESCENTE'>Crescente</option>
                                <option value='DECRESCENTE'>Drecrescente</option>
                            </select>
                        </label>
                    </div>
                </MenuFiltro>
                <SessaoProduto>
                    {filteredAndOrderedList.map((product)=> {
                        return <Produto 
                            product={product} 
                            onAddProductToCart={this.props.onAddProductToCart}
                        />
                    })}
                </SessaoProduto>
            </div>
           
        )
    }
}

export default SessaoProdutos