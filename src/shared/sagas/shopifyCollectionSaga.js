import { call, put, takeLatest } from 'redux-saga/effects';
import fetchShopifyStoreApi from '../graphql/queries/fetchShopifyStoreApi';
import { getShopifyCollectionQuery } from '../graphql/queries/queries';

import {
  GET_SHOPIFY_COLLECTION_REQUESTED,
  GET_SHOPIFY_COLLECTION_SUCCEEDED,
  GET_SHOPIFY_COLLECTION_FAILED
} from './../actions/shopify-data-actions';


function* setCurrentCollection( action ) {
  const { payload } = action;
  const collectionData = yield call(fetchShopifyStoreApi, getShopifyCollectionQuery, payload);

  const { id, handle, title  } = collectionData.data.collectionByHandle;
  const { edges } = collectionData.data.collectionByHandle.products;

  try {
    yield put({
      type: GET_SHOPIFY_COLLECTION_SUCCEEDED,
      payload: { id, handle, title, edges }
    });
  } catch (error) {
    yield put({
      type: GET_SHOPIFY_COLLECTION_FAILED,
      payload: error
    });
  }
};

export function* setShopifyCollectionSaga() {
  yield takeLatest(GET_SHOPIFY_COLLECTION_REQUESTED, setCurrentCollection)
};
