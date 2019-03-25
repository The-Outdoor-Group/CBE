import { put, takeLatest } from 'redux-saga/effects';

import {
  SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED,
  SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED,
  SET_INFO_PANEL_ID_DOM_MATCH_FAILED
} from './../actions/shared-ui-actions';

function* setMatchingName( action ) {
  const { payload } = action;

  try {
    yield put({
      type: SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SET_INFO_PANEL_ID_DOM_MATCH_FAILED,
      payload: error
    });
  }
}

export function* setIdMatchForParentContainerSaga() {
  yield takeLatest(SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED, setMatchingName);
}
