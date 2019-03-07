import { all, fork } from 'redux-saga/effects';

import { fetchUsersSaga } from './userSaga';
import {
  setSecondaryNavStateSaga,
} from './secondaryMenuSaga';


export default function* rootSaga() {
  yield all([
    fork(fetchUsersSaga),
    fork(setSecondaryNavStateSaga),
  ])
};
