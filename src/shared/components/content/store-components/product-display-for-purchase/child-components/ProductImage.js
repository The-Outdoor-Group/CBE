/*
  Will have to be a higher order component that wraps the Image component.
  This way can reuse image, and have the additional functionality to putting a
  high res image on click.
*/

import React, { Component } from 'react';
import loadable from '@loadable/component';

const Image = loadable( () => import('../../../hero-components/Image') );

class ProductImage extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(`pass the src to parent, and the parent should load a modal with the same img but higher res`);
    this.props.showHiRes({src: "https://via.placeholder.com/250x350" }); // will be the src prop passed in.
  }

  render() {
    return (
      <li onClick={this.handleClick}><Image data={{ src: "https://via.placeholder.com/250x350", alt: "placeholder" }} /></li>
    );
  }
}

export default ProductImage;
