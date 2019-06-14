import React, { useEffect } from 'react';

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
  },
  {
    type: "heroVerticalHalfMediaHalfArticle",
    cssClass: "light",
    image: {
      src: "https://via.placeholder.com/150",
      alt: "This is a placeholder"
    },
    content: {
      title: "Engage Hybrid Specs",
      navLinks: [
        { name: "Link_1" },
        { name: "Link_2" }
      ],
      lists: [
        {
          name: "Link_1",
          content: [
            { title: "1 Spec_1", text: "About this spec" },
            { title: "1 Spec_2", text: "About this spec" },
            { title: "1 Spec_3", text: "About this spec" },
            { title: "1 Spec_4", text: "About this spec" },
            { title: "1 Spec_5", text: "About this spec" }
          ]
        },
        {
          name: "Link_2",
          content: [
            { title: "2 Spec_1", text: "About this spec" },
            { title: "2 Spec_2", text: "About this spec" },
            { title: "2 Spec_3", text: "About this spec" },
            { title: "2 Spec_4", text: "About this spec" },
            { title: "2 Spec_5", text: "About this spec" }
          ]
        }
      ]
    }
  },
  {
    type: "heroHorizontalWhole",
    cssClass: "dark",
    title: "Order Engage Hybrid",
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

const HomePage = (props) => {

  useEffect(() => {
    const mainNavHeight = 80;

    const handleScroll = () => {
      let el = locateElAtTop('.hero-region')(mainNavHeight);
      let result = !!isAtEndOfPage();

      props.setEndOfPageScroll(result);

      if (el) el.classList.contains('light') ? props.setMainNavThemeColor( 'dark' ) : props.setMainNavThemeColor( 'light' );
    };

    const debouncedScroll = _debounce(handleScroll, 750);
    window.addEventListener( 'scroll', debouncedScroll );

    return () => {
      window.removeEventListener('scroll', debouncedScroll );
    }
  }, [props.sharedUiState.mainNavThemeColor]);

  const { mainNavThemeColor } = props.sharedUiState;
  const createHeroNodes = () => heroNodes.map( (props, i) => <Hero key={i} data={props} /> );

  return createHeroNodes();
};

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMainNavThemeColor, setEndOfPageScroll })(HomePage);
