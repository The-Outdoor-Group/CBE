import React, { Component, Fragment } from 'react';
import loadable from '@loadable/component';

const ShopHero = loadable( () => import('./../components/content/store-components/ShopHero') );
// import { connect } from 'react-redux';
// import actions etc

const heroNodes = [
  {
    type: "heroHorizontalFullImageSlider",
    content: {
      title: "70vh image Slider",
    }
  },
  {
    type: "heroImageTileSlider",
    content: {
      title: "The Best Sellers slider",
    }
  },
  {
    type: "heroHorizontalTwoTiles",
    content: {
      title: "Two main category images",
    }
  },
  {
    type: "heroHorizontalTwoTiles",
    content: {
      title: "Two more main category images",
    }
  },
  {
    type: "heroVerticalTilesOneLeftTwoRight",
    content: {
      title: "Left column image and two on right side each 1/2 height of left",
    }
  }
];

class Shop extends Component {
  render() {

    const createHeroNodes = () => heroNodes.map( (props, i) => <ShopHero key={i} data={props} /> );

    return (
      <Fragment>
        { createHeroNodes() }
      </Fragment>
    );
  }
}

export default Shop;
