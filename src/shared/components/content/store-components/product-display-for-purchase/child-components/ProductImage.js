/*
  Will have to be a higher order component that wraps the Image component.
  This way can reuse image, and have the additional functionality to putting a
  high res image on click.
*/

import React, { Component } from 'react';
import loadable from '@loadable/component';

const Image = loadable( () => import('../../../hero-components/Image') );

class Productimage extends Component {
  render() {
    return <h1>HOC</h1>;
  }
}

export default Productimage;
