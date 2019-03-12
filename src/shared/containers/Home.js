import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';
import _debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { setMainNavThemeColor } from '../actions/shared-ui-actions';

const Hero = loadable( () => import('./../components/content/Hero') );

const heroNodes = [
  {class: "light", copy: "0 div"},
  {class: "dark", copy: "1 div"},
  {class: "light", copy: "2 div"},
  {class: "dark", copy: "3 div"}
];

class HomePage extends Component {

  constructor() {
    super();

    this.debouncedScroll;
    this.mainNavHeight

    this.handleScroll = this.handleScroll.bind(this);
    this.locateElAtTop = this.locateElAtTop.bind(this);
    this.isInViewPort = this.isInViewPort.bind(this);
    this.getElementDistance = this.getElementDistance.bind(this);

  }

  componentDidMount() {
    this.debouncedScroll = _debounce(this.handleScroll, 750);
    window.addEventListener( 'scroll', this.debouncedScroll );

    this.mainNavHeight = 80;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedScroll );
  }

  handleScroll() {
    console.log('scrolling - record what class name is at top of window');

    let el = this.locateElAtTop();

    if (el) {
      console.log('el match: ', el)
      console.log('el has light class: ', el.classList.contains('light'));
      console.log('el has dark class: ', el.classList.contains('dark'));
      // send to nav so it can change color
      if ( el.classList.contains('light') ) {
        this.props.setMainNavThemeColor( 'dark' );
      } else {
        this.props.setMainNavThemeColor( 'light' );
      }
    }

  }

  locateElAtTop() {
    let heroRegions = document.querySelectorAll('.hero-region');
    let result = Array.from(heroRegions).filter( region => this.isInViewPort(region) )[0];

    console.log('result: ', result);
    return result;
  }

  // determines if an element is in viewport
  isInViewPort(el) {
    let rect = el.getBoundingClientRect();
    console.log('top: ', rect.top);
    console.log('bottom: ', rect.bottom);
    console.log('window.innerHeight: ', window.innerHeight);

    return (
      // rect.top >= 0 &&
      // rect.left >= 0 &&
      // rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
      // rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
      (rect.bottom <= ( window.innerHeight + (this.mainNavHeight / 2) || document.documentElement.clientHeight + (this.mainNavHeight / 2) ) && rect.bottom >= this.mainNavHeight )
    );
  }

  // determine element's distance to top of document
  getElementDistance(el) {
    // get current location's distance from top of page
    let position = window.pageYOffset;
    console.log('window.pageYOffset: ', position);

    let location = 0;

    if (el.offsetParent) {
      do {
        location += el.offsetTop;
        el = el.offsetParent;
      } while (el);
    }

    return location >= 0 ? location : 0;
  }

  render() {

    const createHeroNodes = () => heroNodes.map( (hero, i) => <Hero heroRef={ (el) => this[`heroRegion${i}`] = el } class={hero.class} copy={hero.copy} />);

    return (
    <Fragment>
      { createHeroNodes() }
    </Fragment>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMainNavThemeColor })(HomePage);
