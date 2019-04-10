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
    this.props.showHiRes({src: this.props.src }); // will be the src prop passed in.
  }

  render() {
    const productDetailNodes = () => this.props.productDetail.map( (detail, i) => <li>{detail.name} - {detail.value}</li>);

    return (
      <li onClick={this.handleClick}>
        <div>
          <h4>The CBE {this.props.title}</h4>
          <ul className="product-image-details">
            { productDetailNodes() }
          </ul>
        </div>
        <Image data={{ src: this.props.src, alt: `The CBE ${this.props.title}` }} />
      </li>
    );
  }
}

export default ProductImage;
