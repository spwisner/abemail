import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const apiAuth = require('../api/api-credentials');

class CredentialsStore extends EventEmitter {
  constructor() {
    super();
    this.userId = "";
    this.userToken = "";
    this.isSignedIn = false;
    this.navDropdownClass = "dropdown";
    this.displaySignInForm = true;
    this.displayCPForm = false;
    this.isPostLogin = false;
  }

  ////////////////////
  /////// API ////////
  ////////////////////
  _signIn(data) {
    apiAuth.signIn(data)
    .done((response) => {
      // to close dropdown after login
      this.navDropdownClass = "dropdown";

      // Obtain userId and Token
      this.userId = response.user.id;
      this.userToken = response.user.token;

      // Update Sign-In Status
      this.isSignedIn = true;

      // Clear SignIn Form
      const form = document.forms.signInForm;
      form.email.value = "";
      form.password.value = "";

      // Signal Postlogin Nav
      this.isPostLogin = true;

      // Emit change
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
  }

  ///////////////////////////
  /////// Navigation ////////
  ///////////////////////////

  _displayNavDropdown(boolean) {
    if (boolean) {
      this.navDropdownClass = "dropdown open";
    } else {
      this.navDropdownClass = "dropdown";
    }

    this.emit("change");
    return;
  }

  _getNavDropdownClass() {
    return this.navDropdownClass;
  }

  _getIsSignInForm() {
    return this.displaySignInForm;
  }

  _getDisplayCPForm() {
    return this.displayCPForm;
  }

  _setDisplayCPForm(boolean) {
    if (boolean) {
      this.displayCPForm = true;
    } else {
      this.displayCPForm = false;
    }
    this.emit("change");
    return;
  }

  _setIsSignInForm(boolean) {
    if (boolean) {
      this.displaySignInForm = true;
      this.emit("change");
      return;
    } else {
      this.displaySignInForm = false;
      this.emit("change");
      return;
    }
  }

  ///////////////////////////
  /////// Credentials ///////
  ///////////////////////////
  _getUserId() {
    return this.userId;
  };

  _getUserToken() {
    return this.userToken;
  };

  _getUserStatus() {
    return this.isSignedIn;
  }

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

      case "SET_DISPLAY_CP_FORM": {
        this._setDisplayCPForm(action.boolean);
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
