import React from 'react';
import astronalt from './images/astronaut-resized.png';
import './App.css';
import banner from './images/banner.webp'
import styled from 'styled-components'



const Banner = styled.img`
display: felx;
justify-content: center;
width: 100vw;
max-height: 55vh;
`

const Astronalt = styled.img`
position: absolute;
top:-33px;
right:30vw ;
width: 20%;
transition: transform 1s;
&:hover{
  transform: translate(20px, 20px);
}
`

function App() {
  return (
    <div className="banner">
      <Banner src={banner} className="banner-img" ></Banner>
        <Astronalt src={astronalt} className="astronalt-img" alt="astronalt" ></Astronalt>
        
    </div>
  );
}

export default App;
