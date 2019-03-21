import { put, takeLatest } from 'redux-saga/effects';

import {
  SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED,
  SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED,
  SET_MORE_INFO_PANEL_VISIBILITY_FAILED
} from './../actions/shared-ui-actions';

function* setInfoPanelState( action ) {
  const { payload } = action;

  try {
    yield put({
      type: SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SET_MORE_INFO_PANEL_VISIBILITY_FAILED,
      payload: error
    });
  }
}

export function* setMoreInfoPanelVisibilitySaga() {
  yield takeLatest(SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED, setInfoPanelState);
}
