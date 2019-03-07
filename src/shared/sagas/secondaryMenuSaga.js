import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  SET_SECONDARY_NAV_STATE_REQUESTED,
  SET_SECONDARY_NAV_STATE_SUCCEEDED,
  SET_SECONDARY_NAV_STATE_FAILED,
} from './../actions/shared-ui-actions';

// ----------

function* setMenuState( action ) {
  const { payload } = action;

  try {
    yield put({
      type: SET_SECONDARY_NAV_STATE_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SET_SECONDARY_NAV_STATE_FAILED,
      payload: error
    });
  }
}

export function* setSecondaryNavStateSaga() {
  yield takeLatest(SET_SECONDARY_NAV_STATE_REQUESTED, setMenuState);
}
