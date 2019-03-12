import { put, takeLatest } from 'redux-saga/effects';

import {
  SET_MAIN_NAV_COLOR_THEME_REQUESTED,
  SET_MAIN_NAV_COLOR_THEME_SUCCEEDED,
  SET_MAIN_NAV_COLOR_THEME_FAILED
} from './../actions/shared-ui-actions';

function* setMenuColorState( action ) {
  const { payload } = action;

  try {
    yield put({
      type: SET_MAIN_NAV_COLOR_THEME_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SET_MAIN_NAV_COLOR_THEME_FAILED,
      payload: error
    });
  }
}

export function* setMainNavThemeColorSaga() {
  yield takeLatest(SET_MAIN_NAV_COLOR_THEME_REQUESTED, setMenuColorState)
}
