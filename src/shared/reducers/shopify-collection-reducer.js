import { merge } from 'lodash/object';
import { GET_SHOPIFY_COLLECTION_SUCCEEDED } from './../actions/shopify-data-actions';

const initialState = {
  id: null,
  handle: null,
  title: null,
  products: {}
};

const shopifyCollectionReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case GET_SHOPIFY_COLLECTION_SUCCEEDED:
      const { id, handle, title } = payload;
      const products = payload.edges;
      return merge( {}, state, { id, handle, title, products } );

    default:
      return state;
  }
};

export default shopifyCollectionReducer;

// GET_SHOPIFY_PRODUCT_SUCCEEDED, GET_SHOPIFY_PRODUCT_FAILED
