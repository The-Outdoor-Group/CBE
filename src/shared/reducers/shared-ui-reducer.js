import { merge } from 'lodash/object';

import {
  SET_SECONDARY_NAV_STATE_SUCCEEDED,
  SET_MAIN_NAV_COLOR_THEME_SUCCEEDED

} from './../actions/shared-ui-actions';

const initialState = {
  secondaryMenuVisible: false,
  mainNavThemeColor: 'dark'
};

const sharedUiReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case SET_SECONDARY_NAV_STATE_SUCCEEDED:
      return merge( {}, state, {secondaryMenuVisible: payload} );

    case SET_MAIN_NAV_COLOR_THEME_SUCCEEDED:
      return merge( {}, state, {mainNavThemeColor: payload} );

    default:
      return state;
  }
};

export default sharedUiReducer;
