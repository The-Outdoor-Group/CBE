import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED
} from './../actions/users'


const url = 'https://api.github.com/gists';

export const fetchUsersFromApi = () => fetch(url).then( response => !response.ok ? ( () => { throw "error" } ) : response.json() );

function* fetchGists() {
  try {
    console.log('fetchGists saga');
    const gists = yield call(fetchUsersFromApi);
    console.log('responseFromApi gists: ', gists);

    yield put({
      type: FETCH_USERS_SUCCEEDED,
      payload: gists
    });
  }

  catch (error) {
    yield put({
      type: FETCH_USERS_FAILED,
      payload: error
    });
  }

};

export function* fetchUsersSaga() {
  yield takeLatest(FETCH_USERS_REQUESTED, fetchGists);
};
