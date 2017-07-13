import React from 'react';

import CredentialsStore from '../../../stores/CredentialsStore';
import {Link} from 'react-router-dom';
// import * as CredentialsActions from '../../actions/CredentialsActions';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: CredentialsStore._getUserId(),
      userToken: CredentialsStore._getUserToken(),
      isSignedIn: CredentialsStore._getUserStatus(),
    };

    this._handleSignIn = this._handleSignIn.bind(this);
  }

  componentWillMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        userId: CredentialsStore._getUserId(),
        userToken: CredentialsStore._getUserToken(),
        isSignedIn: CredentialsStore._getUserStatus(),
      });
    });
  }

  _handleSignIn(event) {
    event.preventDefault();
    const form = document.forms.signInForm;

    const data = {
      credentials: {
        email: form.email.value,
        password: form.password.value,
      }
    };

    return CredentialsStore._signIn(data);
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-In</h2>
        <form className="form login-form" name="signInForm" onSubmit={this._handleSignIn}>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" name="email" type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-control" name="password" type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn btn-block btn-success btn-md" value="Sign-In" />
          <div className="register-bg">
            <div className="register-text-container">
              <a href="#" className="register-text">Not a member? Click to Sign Up!</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
