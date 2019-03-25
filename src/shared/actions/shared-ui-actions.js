export const SET_SECONDARY_NAV_STATE_REQUESTED = 'SET_SECONDARY_NAV_STATE_REQUESTED';
export const SET_SECONDARY_NAV_STATE_SUCCEEDED = 'SET_SECONDARY_NAV_STATE_SUCCEEDED';
export const SET_SECONDARY_NAV_STATE_FAILED = 'SET_SECONDARY_NAV_STATE_FAILED';

export const SET_MAIN_NAV_COLOR_THEME_REQUESTED = 'SET_MAIN_NAV_COLOR_THEME_REQUESTED';
export const SET_MAIN_NAV_COLOR_THEME_SUCCEEDED = 'SET_MAIN_NAV_COLOR_THEME_SUCCEEDED';
export const SET_MAIN_NAV_COLOR_THEME_FAILED = 'SET_MAIN_NAV_COLOR_THEME_FAILED';

export const SET_END_OF_PAGE_SCROLL_REQUESTED = 'SET_END_OF_PAGE_SCROLL_REQUESTED';
export const SET_END_OF_PAGE_SCROLL_SUCCEEDED = 'SET_END_OF_PAGE_SCROLL_SUCCEEDED';
export const SET_END_OF_PAGE_SCROLL_FAILED = 'SET_END_OF_PAGE_SCROLL_FAILED';

export const SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED = 'SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED';
export const SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED = 'SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED';
export const SET_MORE_INFO_PANEL_VISIBILITY_FAILED = 'SET_MORE_INFO_PANEL_VISIBILITY_FAILED';

export const SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED = 'SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED';
export const SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED = 'SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED';
export const SET_INFO_PANEL_ID_DOM_MATCH_FAILED = 'SET_INFO_PANEL_ID_DOM_MATCH_FAILED';

export const setSecondaryNavState = (payload) => ({ type: SET_SECONDARY_NAV_STATE_REQUESTED, payload });

export const setMainNavThemeColor = (payload) => ({ type: SET_MAIN_NAV_COLOR_THEME_REQUESTED, payload });

export const setEndOfPageScroll = (payload) => ({ type: SET_END_OF_PAGE_SCROLL_REQUESTED, payload });

export const setMoreInfoPanelVisibility = (payload) => ({ type: SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED, payload });

export const setIdMatchForParentContainer = (payload) => ({ type: SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED, payload });
