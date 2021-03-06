import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShopifyCollection } from '../actions/shopify-data-actions';


/*
  This component is used for main nav selection - will use props.match from url to get products for
  said collection. Will have an action to link up
*/

class Collections extends Component {

  componentWillMount() {
    this.props.getShopifyCollection(this.props.match);
  }

  render() {
    return (
      <div>
        <h1>The Collections Page {this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ currentShopifyCollection }) => {
  const { handle, title, products } = currentShopifyCollection;
  return { handle, title, products };
};

export default connect(mapStateToProps, { getShopifyCollection })( Collections );
