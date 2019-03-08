import React from 'react';
import './assets/css/hero.css';

const Hero = (props) => (
  <div ref={props.heroRef} className={`hero-region ${props.class}`}>
    <h3>{props.copy}</h3>
  </div>
);

export default Hero;
