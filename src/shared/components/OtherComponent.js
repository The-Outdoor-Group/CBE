import React, { Component } from 'react';
import './h1.css';

import { TweenMax } from 'gsap';

export default class OtherComponent extends Component {
  componentDidMount() {
    TweenMax.to(this.h1, 1, { scale: 1.25 });
  }

  render() {
    return <h1 ref={el => this.h1 = el}>I am the other component</h1>;
  }
}
