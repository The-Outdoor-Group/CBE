import { merge } from 'lodash/object';

import {
  SET_SECONDARY_NAV_STATE_SUCCEEDED,
  SET_MAIN_NAV_COLOR_THEME_SUCCEEDED,
  SET_END_OF_PAGE_SCROLL_SUCCEEDED,
  SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED,
  SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED,
  SET_MAIN_NAV_URL_SUCCEEDED
} from './../actions/shared-ui-actions';

const initialState = {
  secondaryMenuVisible: false,
  mainNavThemeColor: 'dark',
  endOfPageScroll: false,
  openMoreInfoPanel: false,
  elMatchForScrolling: null,
  mainUrl: null
};

const sharedUiReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case SET_SECONDARY_NAV_STATE_SUCCEEDED:
      return merge( {}, state, {secondaryMenuVisible: payload} );

    case SET_MAIN_NAV_COLOR_THEME_SUCCEEDED:
      return merge( {}, state, {mainNavThemeColor: payload} );

    case SET_END_OF_PAGE_SCROLL_SUCCEEDED:
      return merge( {}, state, {endOfPageScroll: payload} );

    case SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED:
      return merge( {}, state, {openMoreInfoPanel: payload} );

    case SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED:
      return merge( {}, state, { elMatchForScrolling: payload });

    case SET_MAIN_NAV_URL_SUCCEEDED:
      return merge( {}, state, { mainUrl: payload });

    default:
      return state;
  }
};

export default sharedUiReducer;
