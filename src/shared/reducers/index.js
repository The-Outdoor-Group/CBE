import { combineReducers } from 'redux';
import sharedUiReducer from './shared-ui-reducer';
import shopifyCollectionReducer from './shopify-collection-reducer';

export default combineReducers({
  sharedUiState: sharedUiReducer,
  currentShopifyCollection: shopifyCollectionReducer
});
