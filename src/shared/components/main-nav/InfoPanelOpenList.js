import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import colorStyle from './assets/utilities/font-color-style';

// nav list when more info panel is open

const InfoPanelOpenList = (props) => {
  const { colorTheme } = props;

  return (
    <Fragment>
      <li style={colorStyle(colorTheme)}>Engage Hybrid Features</li>
      <li style={colorStyle(colorTheme)}><button>Buy Now</button></li>
    </Fragment>
  );
}

export default InfoPanelOpenList;
