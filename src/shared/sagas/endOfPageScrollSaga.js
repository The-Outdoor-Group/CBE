import { put, takeLatest } from 'redux-saga/effects';

import {
  SET_END_OF_PAGE_SCROLL_REQUESTED,
  SET_END_OF_PAGE_SCROLL_SUCCEEDED,
  SET_END_OF_PAGE_SCROLL_FAILED
} from './../actions/shared-ui-actions';

function* setPageScrollEndState( action ) {
  const { payload } = action;

  try {
    yield put({
      type: SET_END_OF_PAGE_SCROLL_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SET_END_OF_PAGE_SCROLL_FAILED,
      payload: error
    });
  }
}

export function* setEndOfPageScrollSaga() {
  yield takeLatest(SET_END_OF_PAGE_SCROLL_REQUESTED, setPageScrollEndState)
}
