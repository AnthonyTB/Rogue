import React from 'react';
import './Hero.css';
import HeroBranding from '../../Assets/Logo.png';
import { Animated } from 'react-animated-css';

function Hero() {
  return (
    <>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDelay={900}
        animationOutDelay={800}
        isVisible={true}
      >
        <img
          src={HeroBranding}
          className='Hero-Branding'
          alt='Rogue Branding'
        />
        <div className='scrolldown'></div>
      </Animated>
    </>
  );
}

export default Hero;
