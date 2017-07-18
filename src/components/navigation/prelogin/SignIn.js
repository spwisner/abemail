import React from 'react';
import {withRouter} from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this._handleSignIn = this._handleSignIn.bind(this);
  }

  componentDidMount() {
    // const data = {
    //   credentials: {
    //     email: "Z@Z",
    //     password: "z",
    //   }
    // };
    // this.props._signIn(data);
  }

  _handleSignIn(event) {
    event.preventDefault();
    const form = document.forms.credentialsForm;

    const data = {
      credentials: {
        email: form.email.value,
        password: form.password.value,
      }
    };

    /*********************FOR TESTING Start**************/

    // Data predefined with testing credentials
    // const data = {
    //   credentials: {
    //     email: "Z@Z",
    //     password: "z",
    //   }
    // };

    /****To remove empty var error from
        browser console with testing******/
    // if (1 === 2) {
    //   console.log(form);
    // }
    /*********************FOR TESTING END**************/

    form.password.value = "";
    this.props._signIn(data);
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
          <button className="btn btn-danger" onClick={this.props._cancelPreLogin}>Cancel</button>
          <div className="register-bg">
            <div className="register-text-container">
              <a href="#" className="register-text" onClick={this.props._setIsSignInForm}>Not a member? Click to Sign Up!</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn);
