import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div 
`
    background-color: #181114;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    /*height: 20%;*/
`

function Header () {
    return(
        <ContainerHeader>
           <h1>LABEX</h1>
        </ContainerHeader>
    )
}

export default Header;
