import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import * as CredentialsActions from '../../../actions/CredentialsActions';
const apiAuth = require('../../../api/api-credentials');
import {withRouter} from "react-router-dom";

class Prelogin extends React.Component {
  constructor(props) {
    super(props);

    this._togglePreNavDropdown = this._togglePreNavDropdown.bind(this);
    this._signIn = this._signIn.bind(this);
    this._cancelPreLogin = this._cancelPreLogin.bind(this);
    this._setIsSignInForm = this._setIsSignInForm.bind(this);
  }

  _cancelPreLogin(event) {
    event.preventDefault();
    CredentialsActions._togglePreNavDropdown("dropdown open");
    return;
  }

  _setIsSignInForm(event) {
    event.preventDefault();
    CredentialsActions._setIsSignInForm(!this.props._displaySignInForm);
    return;
  }

  _togglePreNavDropdown(event) {
    event.preventDefault();
    const dropdownState = this.props._navDropdownClass;
    CredentialsActions._togglePreNavDropdown(dropdownState);
  }

  _redirectAuctions() {
    this.props.history.push("/auctions");
  }

  _signIn(data) {
    apiAuth.signIn(data)
    .done((response) => {
      // this._redirectFunction();
      // To close dropdown after login & make post-login menu:
      CredentialsActions._togglePostNavDropdown("dropdown open")

      // Obtain userId and Token
      CredentialsActions._setUserId(response.user.id)
      CredentialsActions._setUserToken(response.user.token);

      // Update Sign-In Status
      CredentialsActions._setIsSignedIn(true);

      // Clear SignIn Form
      const form = document.forms.credentialsForm;
      form.email.value = "";

      this._redirectAuctions();
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

  render() {
    const showSignInForm = this.props._displaySignInForm;
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props._navDropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this._togglePreNavDropdown}>{this.props._menuText} <span className={this.props._glyphiconValue}></span></a>
            <div className="dropdown-menu large-dropdown-menu">
              {showSignInForm ?
                <SignIn
                  _displayDropdown={this._displayDropdown}
                  _signIn={this._signIn}
                  _cancelPreLogin={this._cancelPreLogin}
                  _setIsSignInForm={this._setIsSignInForm}
                  />
                :
                <SignUp
                  _displayDropdown={this._displayDropdown}
                  _signIn={this._signIn}
                  _cancelPreLogin={this._cancelPreLogin}
                  _setIsSignInForm={this._setIsSignInForm}
                />
              }
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Prelogin);
