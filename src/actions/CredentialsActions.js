import dispatcher from '../dispatcher';

export function _signIn(object) {
  dispatcher.dispatch( {
    type: "SIGN_IN",
    object,
  });
}

export function __signOut(id) {
  dispatcher.dispatch( {
    type: "SIGN_OUT",
    id,
  });
}
