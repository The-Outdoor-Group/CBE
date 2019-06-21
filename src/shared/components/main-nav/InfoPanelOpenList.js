import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getStyle } from './assets/utilities/font-color-style';

// nav list when more info panel is open

const InfoPanelOpenList = (props) => {
  const { colorTheme } = props;

  return (
    <Fragment>
      <li style={getStyle({colorTheme})}>Engage Hybrid Features</li>
      <li style={getStyle({colorTheme})}><button>Buy Now</button></li>
    </Fragment>
  );
}

export default InfoPanelOpenList;
