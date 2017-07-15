import React from 'react';

import CredentialsStore from '../../../stores/CredentialsStore';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySignInForm: CredentialsStore._getIsSignInForm(),
    };

    // this._handleSignUp = this._handleSignUp.bind(this);
    this._setIsSignInForm = this._setIsSignInForm.bind(this);
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

    if (form.password.value === form.passwordconfirm.value) {
      form.password.value = "";
      form.passwordconfirm.value = "";

      return CredentialsStore._signUp(data);
    } else {
      form.password.value = "";
      form.passwordconfirm.value = "";

      return console.error('password !=== passwordconfirm');
    }
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
          <input type="submit" className="btn btn-block btn-success btn-md" value="Sign-In" />
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
