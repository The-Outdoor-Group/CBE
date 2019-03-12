import React from 'react';
import './assets/css/hero.css';

const Hero = (props) => (
  <div ref={props.heroRef} className={`hero-region ${props.class}`}>
    <div className="hero-copy">
      <h3>{props.copy}</h3>
      <ul>
        <li><button className="active">active</button></li>
        <li><button>inactive</button></li>
      </ul>
    </div>
  </div>
);

export default Hero;
