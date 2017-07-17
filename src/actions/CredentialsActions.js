import dispatcher from '../dispatcher';

export function _setIsSignInForm(boolean) {
  dispatcher.dispatch( {
    type: "SET_IS_SIGN_IN_FORM",
    boolean,
  });
}

export function _setDisplayCPForm(boolean) {
  dispatcher.dispatch( {
    type: "SET_DISPLAY_CP_FORM",
    boolean,
  });
}

export function _setGlyphiconValue(string) {
  dispatcher.dispatch( {
    type: "SET_GLYPHICON_VALUE",
    string,
  });
}

export function _setMenuText(string) {
  dispatcher.dispatch( {
    type: "SET_MENU_TEXT",
    string,
  });
}

export function _togglePreNavDropdown(string) {
  dispatcher.dispatch( {
    type: "TOGGLE_PRE_NAV_DROPDOWN",
    string,
  });
}

export function _togglePostNavDropdown(string) {
  dispatcher.dispatch( {
    type: "TOGGLE_POST_NAV_DROPDOWN",
    string,
  });
}

export function _setIsSignedIn(boolean) {
  dispatcher.dispatch( {
    type: "SET_IS_SIGNED_IN",
    boolean,
  });
}

export function _setUserId(string) {
  dispatcher.dispatch( {
    type: "SET_USER_ID",
    string,
  });
}

export function _setUserToken(string) {
  dispatcher.dispatch( {
    type: "SET_USER_TOKEN",
    string,
  });
}
export function _setNavDropdownClass(string) {
  dispatcher.dispatch( {
    type: "SET_NAV_DROPDOWN_CLASS",
    string,
  });
}
