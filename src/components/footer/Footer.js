import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div `
    height: 10%;
    background-color: grey;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`

function Footer () {
    return (
        <ContainerFooter>
        <h4>Oi! Eu moro no footer!</h4>
        </ContainerFooter>
    )
}

export default Footer