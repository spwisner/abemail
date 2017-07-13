import dispatcher from '../dispatcher';

export function _signIn(object) {
  dispatcher.dispatch( {
    type: "SIGN_IN",
    object,
  });
}
