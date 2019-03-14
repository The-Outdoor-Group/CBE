import React from 'react';
import assembleComponent from './assets/assembleComponents';
import './assets/css/hero.css';


const Hero = (data) => {
  const { props } = data;
  const { cssClass } = props;

  return (
    <div className={`hero-region ${cssClass}`}>
      { assembleComponent(props) }
    </div>
  );
};

export default Hero;
