import { call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED
} from './../actions/users'


const url = 'https://api.github.com/gists';

const fetchUsersFromApi = () => fetch(url).then( response => !response.ok ? ( () => { throw "error" } ) : response.json() );


function* fetchGists() {
  try {
    const gists = yield call(fetchUsersFromApi);

    yield put({
      type: FETCH_USERS_SUCCEEDED,
      payload: gists
    });
  } catch (error) {
    yield put({
      type: FETCH_USERS_FAILED,
      payload: error
    });
  }

};

export function* fetchUsersSaga() {
  yield takeEvery(FETCH_USERS_REQUESTED, fetchGists);
};
