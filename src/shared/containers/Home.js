import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';
import _debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { setMainNavThemeColor, setEndOfPageScroll } from '../actions/shared-ui-actions';
import { locateElAtTop, isInViewPort, isAtEndOfPage } from './assets/utilities/dom-element-location-tools';

const Hero = loadable( () => import('./../components/content/Hero') );

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
    },
    moreInfoHandle: "engage-hybrid-handling", // query arg that will get that particular doc to load info from moreInfoButton click
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
    },
    moreInfoHandle: "engage-hybrid-benefits", // query arg that will get that particular doc to load info from moreInfoButton click
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
    moreInfoHandle: "engage-hybrid-design", // query arg that will get that particular doc to load info from moreInfoButton click
  }
];

class HomePage extends Component {

  constructor() {
    super();

    this.debouncedScroll;
    this.mainNavHeight

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillnmount() {
    this.props.setEndOfPageScroll(false);
  }

  componentDidMount() {
    this.debouncedScroll = _debounce(this.handleScroll, 750);
    window.addEventListener( 'scroll', this.debouncedScroll );

    this.mainNavHeight = 80;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedScroll );
  }

  handleScroll() {
    let el = locateElAtTop('.hero-region')(this.mainNavHeight);
    let result = !!isAtEndOfPage();

    this.props.setEndOfPageScroll(result);

    if (el) {
      if ( el.classList.contains('light') ) {
        this.props.setMainNavThemeColor( 'dark' );
      } else {
        this.props.setMainNavThemeColor( 'light' );
      }
    }

  }

  render() {
    const { mainNavThemeColor } = this.props.sharedUiState;

    const createHeroNodes = () => heroNodes.map( (props, i) => <Hero data={props} /> );

    return (
      <Fragment>
        { createHeroNodes() }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMainNavThemeColor, setEndOfPageScroll })(HomePage);
