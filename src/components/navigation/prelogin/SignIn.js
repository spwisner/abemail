import React from 'react';

import CredentialsStore from '../../../stores/CredentialsStore';
import {withRouter} from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySignInForm: CredentialsStore._getIsSignInForm()
    };

    this._handleSignIn = this._handleSignIn.bind(this);
    this._setIsSignInForm = this._setIsSignInForm.bind(this);
    this._cancelLogin = this._cancelLogin.bind(this);
  }

  _redirectFunction() {
    this.props.history.push("/auction");
  }

  _handleSignIn(event) {
    event.preventDefault();
    const form = document.forms.credentialsForm;

    // const data = {
    //   credentials: {
    //     email: form.email.value,
    //     password: form.password.value,
    //   }
    // };

    /*********************TESTING**************/
    const data = {
      credentials: {
        email: "Z@Z",
        password: form.password.value,
      }
    };

    /***********Get rid of empty var error with testing**********/
    if (1 ===2) {
      console.log(form);
    }
    /*********************TESTING*************/

    form.password.value = "";
    this.props._signIn(data);
  }

  _setIsSignInForm(event) {
    event.preventDefault();
    return CredentialsStore._setIsSignInForm(false);
  }

  _cancelLogin(event) {
    event.preventDefault();
    this.props._displayDropdown(false);
    return;
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-In</h2>
        <form className="form login-form" name="credentialsForm" onSubmit={this._handleSignIn}>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" name="email" type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-control" name="password" type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn btn-success margin-right-btn" value="Sign-In" />
          <button className="btn btn-danger" onClick={this._cancelLogin}>Cancel</button>
          <div className="register-bg">
            <div className="register-text-container">
              <a href="#" className="register-text" onClick={this._setIsSignInForm}>Not a member? Click to Sign Up!</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn);
