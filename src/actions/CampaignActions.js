import dispatcher from '../dispatcher';

export function _setIsSignInForm(object) {
  dispatcher.dispatch( {
    type: "SET_CAMPAIGNS",
    object,
  });
}
