import { merge } from 'lodash/object';

import {
  SET_SECONDARY_NAV_STATE_SUCCEEDED,

} from './../actions/shared-ui-actions';

const initialState = {
  secondaryMenuVisible: false,
};

const sharedUiReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case SET_SECONDARY_NAV_STATE_SUCCEEDED:
      return merge({}, state, {secondaryMenuVisible: payload});

    default:
      return state;
  }
};

export default sharedUiReducer;
