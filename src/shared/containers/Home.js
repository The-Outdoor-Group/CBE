import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';
import _debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { setMainNavThemeColor } from '../actions/shared-ui-actions';

const Hero = loadable( () => import('./../components/content/Hero') );
const MoreContentArrow = loadable( () => import('./../components/content/assets/images/MoreContentArrow') );

const heroNodes = [
  { type: "intro", cssClass: "light", title: "Engage Hybrid", stats: ["QuadTrack Design", "2nd & 3rd axis adjustment", "Rapid Drive"] },
  { type: "tech", cssClass: "dark", leftSide: { title: "Engage Hybrid" }, rightSide: { }  },
  { type: "benefits", cssClass: "light", title: "Engage Hybrid", stats: ["QuadTrack Design", "2nd & 3rd axis adjustment", "Rapid Drive"] },
  { type: "usecase", cssClass: "dark", title: "Engage Hybrid", stats: ["QuadTrack Design", "2nd & 3rd axis adjustment", "Rapid Drive"] }
];

class HomePage extends Component {

  constructor() {
    super();

    this.debouncedScroll;
    this.mainNavHeight

    this.handleScroll = this.handleScroll.bind(this);
    this.locateElAtTop = this.locateElAtTop.bind(this);
    this.isInViewPort = this.isInViewPort.bind(this);

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
    let el = this.locateElAtTop();

    if (el) {
      if ( el.classList.contains('light') ) {
        this.props.setMainNavThemeColor( 'dark' );
      } else {
        this.props.setMainNavThemeColor( 'light' );
      }
    }

  }

  locateElAtTop() {
    return Array.from( document.querySelectorAll('.hero-region') ).filter( region => this.isInViewPort(region) )[0];
  }

  isInViewPort(el) {
    let rect = el.getBoundingClientRect();

    return (
      rect.bottom <= ( window.innerHeight + (this.mainNavHeight / 2) || document.documentElement.clientHeight + (this.mainNavHeight / 2) ) &&
      rect.bottom >= this.mainNavHeight
    );
  }

  render() {
    const { mainNavThemeColor } = this.props.sharedUiState;

    const createHeroNodes = () => {
      // console.log('createHeroNodes run - prevent from re-running');
      return heroNodes.map( (props, i) => <Hero props={props} />)
    };

    return (
      <Fragment>
        { createHeroNodes() }
        <MoreContentArrow colorTheme={mainNavThemeColor} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMainNavThemeColor })(HomePage);


// rect.top >= 0 &&
// rect.left >= 0 &&
// rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
// rect.right <= ( window.innerWidth || document.documentElement.clientWidth )


// class={hero.class} copy={hero.copy} stats={hero.stats} type={hero.type} heroRef={ (el) => this[`heroRegion${i}`] = el }
