import { all, fork } from 'redux-saga/effects';

import { fetchUsersSaga } from './userSaga';
import { setSecondaryNavStateSaga } from './secondaryMenuSaga';
import { setMainNavThemeColorSaga } from './mainMenuThemeColorSaga';
import { setEndOfPageScrollSaga } from './endOfPageScrollSaga';
import { setMoreInfoPanelVisibilitySaga } from './moreInfoPanelVisibilitySaga';

export default function* rootSaga() {
  yield all([
    fork(fetchUsersSaga),
    fork(setSecondaryNavStateSaga),
    fork(setMainNavThemeColorSaga),
    fork(setEndOfPageScrollSaga),
    fork(setMoreInfoPanelVisibilitySaga),
  ])
};
