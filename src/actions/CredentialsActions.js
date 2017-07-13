import dispatcher from '../dispatcher';

export function _signIn(object) {
  dispatcher.dispatch( {
    type: "SIGN_IN",
    object,
  });
}

export function _signOut(id) {
  dispatcher.dispatch( {
    type: "SIGN_OUT",
    id,
  });
}

export function _displayNavDropdown(boolean) {
  displatcher.dispatch( {
    type: "DISPLAY_NAV_DROPDOWN",
    boolean,
  });
}

export function _setIsSignInForm(boolean) {
  displatcher.dispatch( {
    type: "SET_IS_SIGN_IN_FORM",
    boolean,
  });
}
