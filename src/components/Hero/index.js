import React from 'react'
import {HeroDiv, HeroImage} from './HeroElements';
import image1 from "../../assets/cover/hero/onaga.png";



const Hero = () => {
  return (
    <>
      <HeroDiv>
        <HeroImage src={image1} alt="Onaga, King of Dragons"/>
        <h1>yo</h1>
      </HeroDiv>
    </>
  );
}

export default Hero;
