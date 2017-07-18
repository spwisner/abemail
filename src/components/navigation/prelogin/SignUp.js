import React from 'react';
const apiAuth = require('../../../api/api-credentials');
const store = require('../../../store');

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this._signUpRequest = this._signUpRequest.bind(this);
    this._handleSignUp = this._handleSignUp.bind(this);
  }

  _signUpRequest(data) {
    store.signUpEmail = data.credentials.email;
    store.signUpPW = data.credentials.password;
    apiAuth.signUp(data)
    .done((response) => {
      const data = {
        credentials: {
          email: store.signUpEmail,
          password: store.signUpPW
        }
      }
      this.props._signIn(data);
      return;
    })
    .fail((response) => {
      if (response.statusText === "Unauthorized") {
        return console.error('fail: Unauthorized');
      } else if (response.statusText === "error") {
        return console.error('server error');
      }
    });
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

    if (form.password.value !== form.passwordconfirm.value) {
      form.password.value = "";
      form.passwordconfirm.value = "";
      return console.error('password !=== passwordconfirm');
    }

    return this._signUpRequest(data);
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
          <button className="btn btn-danger" onClick={this.props._cancelPreLogin}>Cancel</button>
          <div className="register-bg">
            <div className="register-text-container">
              <a href="#" className="register-text" onClick={this.props._setIsSignInForm}>Already a member? Click to Login</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
