import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const apiAuth = require('../api/api-credentials');

class CredentialsStore extends EventEmitter {
  constructor() {
    super();
    this.credentials = [];
    this.userId = "";
    this.userToken = "";
    this.isSignedIn = false;
    this.navDropdownClass = "dropdown";
    this.displaySignInForm = true;
  }

  _signIn(data) {
    apiAuth.signIn(data)
    // .then((response) => {
    //   this.credentials = response.user;
    //   this.userId = response.user.id;
    //   this.userToken = response.user.token;
    //   return;
    // })
    .done((response) => {
      console.log(response);

      // to close dropdown after login
      this.navDropdownClass = "dropdown";

      this.credentials = response.user;
      this.userId = response.user.id;
      this.userToken = response.user.token;
      this.isSignedIn = true;
      const form = document.forms.signInForm;
      form.email.value = "";
      form.password.value = "";
      this.emit("change");
      return;
    })
    .fail((response) => {
      if (response.statusText === "Unauthorized") {
        return console.log('fail: Unauthorized');
      } else if (response.statusText === "error") {
        return console.log('server error');
      }
    });
  };

  _displayNavDropdown(boolean) {
    if (boolean) {
      this.navDropdownClass = "dropdown open";
    } else {
      this.navDropdownClass = "dropdown";
    }
  }

  _getUserId() {
    return this.userId;
  };

  _getNavDropdownClass() {
    return this.navDropdownClass;
  }

  _getUserToken() {
    return this.userToken;
  };

  _getUserStatus() {
    return this.isSignedIn;
  }

  _getIsSignInForm() {
    return this.displaySignInForm;
  }

  _setIsSignInForm(boolean) {
    if (boolean) {
      this.displaySignInForm = true;
    } else {
      this.displaySignInForm = false;
    }
    this.emit("change");
    return;
  }

  _signOut(id) {
    apiAuth.signOut(id)
    .done((response) => {
      this.isSignedIn = false;
      this.userId = "";
      this.userToken = "";
      this.emit("change");
      return;
    })
    .fail((response) => {
      console.log(response);
      if (response.status === 404) {
        return console.log('fail: 404 Not found');
      } else if (response.status === 0) {
        return console.log('server error');
      }
    });
  };

  handleActions(action) {
    switch(action.type) {
      case "SIGN_IN": {
        this._signIn(action.object);
        break;
      }

      case "SIGN_OUT": {
        this._signOut(action.id);
        break;
      }

      case "DISPLAY_NAV_DROPDOWN": {
        this._displayNavDropdown(action.boolean);
        break;
      }

      case "SET_IS_SIGN_IN_FORM": {
        this._setIsSignInForm(action.boolean);
        break;
      }

      default:
        return undefined;
    }
  }
}

const credentialsStore = new CredentialsStore();

dispatcher.register(credentialsStore.handleActions.bind(credentialsStore));

export default credentialsStore;
