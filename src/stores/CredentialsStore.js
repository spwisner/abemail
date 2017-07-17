import { EventEmitter } from "events";
import dispatcher from '../dispatcher';

class CredentialsStore extends EventEmitter {
  constructor() {
    super();
    this.userId = "";
    this.userToken = "";
    this.isSignedIn = false;
    this.navDropdownClass = "dropdown";
    this.glyphiconValue = "glyphicon glyphicon-log-in";
    this.menuText = "Login";
    this.displaySignInForm = true;
    this.displayCPForm = false;
  }

  //////////////////////////////////////////
  ////////////////Navigation////////////////
  //////////////////////////////////////////

  //////////////Navigation Actions///////////
  _togglePostNavDropdown(string) {
    if (string === "dropdown") {
      this.navDropdownClass = "dropdown open";
      this.glyphiconValue = "glyphicon glyphicon-collapse-up";
      this.menuText = "Hide";
    } else {
      this.navDropdownClass = "dropdown";
      this.glyphiconValue = "glyphicon glyphicon-list";
      this.menuText = "Options";
      this.displayCPForm = false;
    }
    this.emit("change");
    return;
  }

  _togglePreNavDropdown(string) {
    if (string === "dropdown") {
      this.navDropdownClass = "dropdown open";
      this.glyphiconValue = "glyphicon glyphicon-collapse-up";
      this.menuText = "Hide";
    } else {
      this.navDropdownClass = "dropdown";
      this.glyphiconValue = "glyphicon glyphicon-log-in";
      this.menuText = "Login";
    }
    this.emit("change");
    return;
  }

  _setNavDropdownClass(string) {
    this.navDropdownClass = string;
    this.emit("change");
    return;
  }

  ////////////Navigation Properties/////////
  _getGlyphiconValue() {
    return this.glyphiconValue;
  }

  _setGlyphiconValue(str) {
    this.glyphiconValue = str;
    this.emit("change");
    return;
  }

  _setMenuText(str) {
    this.menuText = str;
    this.emit("change");
    return;
  }

  _getMenuText() {
    return this.menuText;
  }

  _getNavDropdownClass() {
    return this.navDropdownClass;
  }

  //////////////////////////////////////////
  ////////////////Credentials///////////////
  //////////////////////////////////////////

  //////////////////User ID/////////////////
  _getUserId() {
    return this.userId;
  }

  _setUserId(string) {
    this.userId = string;
    return;
  }

  /////////////////User Token////////////////
  _getUserToken() {
    return this.userToken;
  }
  _setUserToken(string) {
    this.userToken = string;
    return;
  }

  ////////////////Login Status///////////////
  _getUserStatus() {
    return this.isSignedIn;
  }

  _setIsSignedIn(boolean) {
    this.isSignedIn = boolean;
    return;
  }

  ////////////////Form Styling///////////////

  /////////Change Password Form
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

  //////////Sign-In Form
  _getIsSignInForm() {
    return this.displaySignInForm;
  }

  _setIsSignInForm() {
    if (this.displaySignInForm === true) {
      this.displaySignInForm = false;
    } else {
      this.displaySignInForm = true;
    }
    this.emit("change");
    return;
  }

  handleActions(action) {
    switch(action.type) {

      case "SET_IS_SIGN_IN_FORM": {
        this._setIsSignInForm(action.boolean);
        break;
      }

      case "SET_DISPLAY_CP_FORM": {
        this._setDisplayCPForm(action.boolean);
        break;
      }

      case "SET_GLYPHICON_VALUE": {
        this._setGlyphiconValue(action.string);
        break;
      }

      case "SET_MENU_TEXT": {
        this._setMenuText(action.string);
        break;
      }

      case "SET_NAV_DROPDOWN_CLASS": {
        this._setNavDropdownClass(action.string);
        break;
      }

      case "TOGGLE_PRE_NAV_DROPDOWN": {
        this._togglePreNavDropdown(action.string);
        break;
      }

      case "TOGGLE_POST_NAV_DROPDOWN": {
        this._togglePostNavDropdown(action.string);
        break;
      }

      case "SET_IS_SIGNED_IN": {
        this._setIsSignedIn(action.boolean);
        break;
      }

      case "SET_USER_ID": {
        this._setUserId(action.string);
        break;
      }

      case "SET_USER_TOKEN": {
        this._setUserToken(action.string);
        break;
      }

      default:
        return undefined;
    }
  }
}

const credentialsStore = new CredentialsStore();

dispatcher.register(credentialsStore.handleActions.bind(credentialsStore));

// window.dispatcher = test
export default credentialsStore;
