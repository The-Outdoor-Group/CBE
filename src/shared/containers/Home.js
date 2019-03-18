import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';
import _debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { setMainNavThemeColor } from '../actions/shared-ui-actions';

const Hero = loadable( () => import('./../components/content/Hero') );
const MoreContentArrow = loadable( () => import('./../components/content/assets/images/MoreContentArrow') );

const heroNodes = [
  {
    type: "heroHorizontalWhole",
    cssClass: "light",
    title: "Engage Hybrid",
    stats: {
      cssClass: "horizontal",
      copy: [
        "QuadTrack Design",
        "2nd & 3rd axis adjustment",
        "Rapid Drive"
      ],
      orderButton: true
    },
  },
  {
    type: "heroVerticalQuarterArticleThreeQuarterMedia",
    cssClass: "dark",
    textArticle: {
      cssClassName: "vertical",
      h2: "Accuracy",
      h1: "The Most Accurate",
      p: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    }
  },
  {
    type: "heroHorizontalThreeQuarterMediaQuarterArticle",
    cssClass: "light",
    stats: {
      cssClass: "vertical",
      copy: [
        "QuadTrack Design",
        "2nd & 3rd axis adjustment",
        "Rapid Drive"
      ],
      orderButton: false
    },
    textArticle: {
      cssClassName: "horizontal",
      h2: "Benefits",
      h1: "Benefits Component",
      p: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    }
  },
  {
    type: "heroVerticalThreeQuarterMediaQuarterArticle",
    cssClass: "dark",
    title: "Engage Hybrid",
    textArticle: {
      cssClassName: "vertical",
      h2: "Usecase",
      h1: "Usecase Component",
      p: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    video: {
      src: "https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/videos/christenberry-spotlight.mp4",
      type: "video/mp4",
      controls: true
    },
    stats: {
      cssClass: "horizontal",
      copy: [
        "QuadTrack Design",
        "2nd & 3rd axis adjustment",
        "Rapid Drive"
      ],
      orderButton: false
    },
  }
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

  shouldComponentUpdate(nextProps, nextState) {
    // Performance enhancement; prevents calling createHeroNodes() when done scrolling.
    return false;
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
