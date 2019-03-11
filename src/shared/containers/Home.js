import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';
import { TweenLite } from 'gsap';
import _debounce from 'lodash/debounce';

import { detectScrollDirection } from './assets/utilities/detect-scroll-direction';

import Hero from './../components/content/Hero';
// const Hero = loadable( () => import('./../components/content/Hero') );


export default class HomePage extends Component {

  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.animateScroll = this.animateScroll.bind(this);
    this.checkIfNextRegionExists = this.checkIfNextRegionExists.bind(this);

    this.state = {
      scrollDirection: null,
      currentPos: 0,
      scrolling: false
    };
  }

  componentDidMount() {
    // imported in this fashion because SSR
    const ScrollToPlugin = require('gsap/ScrollToPlugin');
    window.addEventListener( 'scroll', _debounce(this.handleScroll, 1000, { leading: true }) );

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  animateScroll(direction, currentPos) {
    console.log('animateScroll() currentPos: ', currentPos);
    console.log('should scrollTo el: ', this[`heroRegion${currentPos}`]);
    TweenLite.to(window, 1, { scrollTo: this[`heroRegion${currentPos}`],
      onComplete: () => {
        this.setState({ currentPos, scrolling: false });
        console.log('completed animation');
      }
    });
  }

  checkIfNextRegionExists(direction) {
    let { currentPos } = this.state;

      if (direction === 'up') {
        if (currentPos > 0) {
          if (this[`heroRegion${currentPos - 1}`]) {
            console.log('on scrolling up, PREVIOUS region exists');
            return {exists: true, currentPos: currentPos - 1};
          } else {
            console.log('on scrolling up, PREVIOUS region DOES NOT exist');
            return {exists: false, currentPos};
          }
        } else {
          console.log('we are at the beginning, so there is NO PREVIOUS region');
          return {exists: false, currentPos};
        }
      } else {
        if (this[`heroRegion${currentPos + 1}`]) {
          console.log('on scrolling down, NEXT region exists');
          return {exists: true, currentPos: currentPos + 1};
        } else {
          console.log('on scrolling down, NEXT region DOES NOT exist. We are at the end.');
          return {exists: false, currentPos};
        }
      }
  }

  handleScroll() {
    let direction = detectScrollDirection();
    let { exists, currentPos } = this.checkIfNextRegionExists( direction );
    if (exists) {
      this.animateScroll(direction, currentPos);
    }
  }

  render() {

    let { currentPos } = this.state;
    console.log('RENDER() this.state.currentPos: ', currentPos);

    const createHeroNodes = () => [
      {class: "light", copy: "0 div"},
      {class: "dark", copy: "1 div"},
      {class: "light", copy: "2 div"},
      {class: "dark", copy: "3 div"}
    ].map( (hero, i) => <Hero heroRef={ (el) => this[`heroRegion${i}`] = el } class={hero.class} copy={hero.copy} />);

    return (
    <Fragment>
      { createHeroNodes() }
    </Fragment>
    );
  }
}
