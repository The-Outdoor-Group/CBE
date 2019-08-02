import { all, call, fork } from 'redux-saga/effects';

import { setSecondaryNavStateSaga } from './secondaryMenuSaga';
import { setMainNavThemeColorSaga } from './mainMenuThemeColorSaga';
import { setEndOfPageScrollSaga } from './endOfPageScrollSaga';
import { setMoreInfoPanelVisibilitySaga } from './moreInfoPanelVisibilitySaga';
import { setIdMatchForParentContainerSaga } from './idMatchForParentContainerSaga';
import { setMainUrlSaga } from './mainUrlSaga';

import { setShopifyCollectionSaga } from './shopifyCollectionSaga';

export default function* rootSaga() {
  yield all([
    call(setSecondaryNavStateSaga),
    call(setMainNavThemeColorSaga),
    call(setEndOfPageScrollSaga),
    call(setMoreInfoPanelVisibilitySaga),
    call(setIdMatchForParentContainerSaga),
    call(setMainUrlSaga),
    call(setShopifyCollectionSaga)
  ])
};
