import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';
import { TweenLite } from 'gsap';

import { detectScrollDirection } from './assets/utilities/detect-scroll-direction';

// import Hero from './../components/content/Hero';
const Hero = loadable( () => import('./../components/content/Hero') );


export default class HomePage extends Component {

  constructor() {
    super();

    this.heroRegion;

    this.handleScroll = this.handleScroll.bind(this);
    this.animateScroll = this.animateScroll.bind(this);

    this.state = {
      scrollDirection: null
    };
  }

  componentDidMount() {
    // imported in this fashion because SSR
    const ScrollToPlugin = require('gsap/ScrollToPlugin');
    window.addEventListener('scroll', this.handleScroll);

    // console.log('this.heroRegion1: ', this.heroRegion1);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  animateScroll() {
    if (this.state.scrollDirection === 'up') { TweenLite.to(window, 1, { scrollTo: this.heroRegion0 }) }
    else { TweenLite.to(window, 1, { scrollTo: this.heroRegion1 }) }
  }

  handleScroll() {
    let direction = detectScrollDirection();
    this.setState( {scrollDirection: direction}, this.animateScroll() );
  }

  render() {
    const createHeroNodes = () => [{class: "light", copy: "first div"}, {class: "dark", copy: "second div"}].map( (hero, i) => <Hero heroRef={ (el) => this[`heroRegion${i}`] = el } class={hero.class} copy={hero.copy} />);

    return (
    <Fragment>
      { createHeroNodes() }
    </Fragment>
    );
  }
}
