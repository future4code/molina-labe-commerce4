import React from 'react';
import astronalt from '../../images/astronaut-resized.png';
import banner from '../../images/banner.webp'
import styled from 'styled-components'



const Banner1 = styled.img`
display: flex;
justify-content: center;
width: 100vw;
max-height: 65vh;
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

function Banner() {
  return (
    <div className="banner">
      <Banner1 src={banner} className="banner-img" ></Banner1>
        <Astronalt src={astronalt} className="astronalt-img" alt="astronalt" ></Astronalt>
        
    </div>
  );
}

export default Banner;
