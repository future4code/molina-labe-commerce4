import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div `
    height: 10%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid #5100B5;
`

function Footer () {
    return (
        <ContainerFooter>
        <h4>2021 Labenu</h4>
        </ContainerFooter>
    )
}

export default Footer