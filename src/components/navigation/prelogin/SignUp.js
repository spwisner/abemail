import React from 'react';

import CredentialsStore from '../../../stores/CredentialsStore';
const apiAuth = require('../../../api/api-credentials');
const store = require('../../../store');

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySignInForm: CredentialsStore._getIsSignInForm(),
    };

    this._setIsSignInForm = this._setIsSignInForm.bind(this);
    this._cancelLogin = this._cancelLogin.bind(this);
    this._signUp = this._signUp.bind(this);
    this._handleSignUp = this._handleSignUp.bind(this);
  }

  _signUp(data) {
    store.signUpEmail = data.credentials.email;
    store.signUpPW = data.credentials.password;
    apiAuth.signUp(data)
    .done((response) => {
      console.log(response);
      const data = {
        credentials: {
          email: store.signUpEmail,
          password: store.signUpPW
        }
      }
      console.log(data);
      this.props._signIn(data);
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

  runSignup(data) {
    this._signUp(data);
  }

  _setIsSignInForm(event) {
    event.preventDefault();
    return CredentialsStore._setIsSignInForm(true);
  }

  _handleSignUp(event) {
    event.preventDefault();
    const form = document.forms.credentialsForm;

    const data = {
      credentials: {
        email: form.email.value,
        password: form.password.value,
      }
    };

    // if (form.password.value === form.passwordconfirm.value) {
    //   form.password.value = "";
    //   form.passwordconfirm.value = "";
    //   console.log(data);
    //   this.runSignup(data);
    //   return;
    //
    // } else {
    //   form.password.value = "";
    //   form.passwordconfirm.value = "";
    //
    //   return console.error('password !=== passwordconfirm');
    // }

    if (form.password.value !== form.passwordconfirm.value) {
      form.password.value = "";
      form.passwordconfirm.value = "";

      return console.error('password !=== passwordconfirm');
    }

    this._signUp(data);

    return;

  }

  _cancelLogin(event) {
    event.preventDefault();
    this.props._displayDropdown(false);
    return;
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-Up</h2>
        <form className="form login-form" name="credentialsForm" onSubmit={this._handleSignUp}>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" name="email" type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-control" name="password" type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Password Confirm:</label>
            <input className="form-control" name="passwordconfirm" type="password" placeholder="Password Confirmation" />
          </div>
          <input type="submit" className="btn btn-success margin-right-btn" value="Sign-In" />
          <button className="btn btn-danger" onClick={this._cancelLogin}>Cancel</button>
          <div className="register-bg">
            <div className="register-text-container">
              <a href="#" className="register-text" onClick={this._setIsSignInForm}>Already a member? Click to Login</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
