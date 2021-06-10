import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div `
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    border-bottom: 1px solid #5100B5;
`


function Header () {
    return (
        <ContainerHeader>
           <h1>LABEX</h1>
        </ContainerHeader>
    )
}

export default Header
