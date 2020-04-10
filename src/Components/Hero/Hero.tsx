import React from 'react';
import './Hero.css';
import HeroBranding from '../../Assets/Logo.png';

function Hero() {
  return (
    <>
      <img src={HeroBranding} className='Hero-Branding' alt='Rogue Branding' />
    </>
  );
}

export default Hero;
