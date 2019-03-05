import { merge } from 'lodash/object';
import { union } from 'lodash/array';
import { FETCH_USERS_SUCCEEDED } from './../actions/users';

const initialState = [
  {
    owner: {
      login: "jcardella"
    }
  }
];

const usersReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {

    case FETCH_USERS_SUCCEEDED:
      return payload;

    default:
      return state;
  }
}

export default usersReducer;
