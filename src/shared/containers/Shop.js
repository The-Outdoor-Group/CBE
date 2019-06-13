import React from 'react';
import loadable from '@loadable/component';

const ShopHero = loadable( () => import('./../components/content/store-components/ShopHero') );
// import { connect } from 'react-redux';
// import actions etc

const heroNodes = [
  {
    type: "heroHorizontalFullImageSlider",
    content: {
      tiles: [
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "placeholder",
          },
          title: "70vh image Slider 1",
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "placeholder",
          },
          title: "70vh image Slider 2",
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "placeholder",
          },
          title: "70vh image Slider 3",
        }
      ],
    }
  },
  {
    type: "heroImageTileSlider",
    content: {
      title: "The Best Sellers slider",
      tiles: [
        {
          title: "product 1",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
        {
          title: "product 2",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
        {
          title: "product 3",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
        {
          title: "product 4",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
      ]
    }
  },
  {
    type: "heroHorizontalTwoTiles",
    content: {
      title: "Two main category images",
      tiles: [
        {
          title: "product 1",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
        {
          title: "product 2",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
      ]
    }
  },
  {
    type: "heroHorizontalImageAndHeaderSpreadTile",
    content: {
      title: "One main category split",
      tiles: [
        {
          title: "product 3",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        }
      ]
    }
  },
  {
    type: "heroVerticalTilesOneLeftTwoRight",
    content: {
      title: "Left column image and two on right side each 1/2 height of left",
      tiles: [
        {
          title: "product 4",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
        {
          title: "product 5",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
        {
          title: "product 6",
          image: {
            src: "https://via.placeholder.com/250x350",
            alt: "placeholder",
          }
        },
      ]
    }
  }
];

const Shop = () => {
    const createHeroNodes = () => heroNodes.map( (props, i) => <ShopHero key={i} data={props} /> );
    return createHeroNodes();
}

export default Shop;
