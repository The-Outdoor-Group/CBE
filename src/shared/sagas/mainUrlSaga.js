import { put, takeLatest } from 'redux-saga/effects';

import {
  SET_MAIN_NAV_URL_REQUESTED,
  SET_MAIN_NAV_URL_SUCCEEDED,
  SET_MAIN_NAV_URL_FAILED
} from './../actions/shared-ui-actions';

function* setMainUrlState( action ) {
  const { payload } = action;

  try {
    yield put({
      type: SET_MAIN_NAV_URL_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SET_MAIN_URL_FAILED,
      payload: error
    });
  }
}

export function* setMainUrlSaga() {
  yield takeLatest(SET_MAIN_NAV_URL_REQUESTED, setMainUrlState)
}
