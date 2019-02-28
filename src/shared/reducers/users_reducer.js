import { merge } from 'lodash/object';
import { union } from 'lodash/array';
import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED } from './../actions/users';

const initialState = [];

const usersReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {

    case FETCH_USERS_REQUESTED:
      console.log('FETCH_USERS_REQUESTED');
      return state;

    case FETCH_USERS_SUCCEEDED:
      console.log('FETCH_USERS_SUCCEEDED: ', payload);
      return payload;

    default:
      return state;
  }
}

export default usersReducer;
