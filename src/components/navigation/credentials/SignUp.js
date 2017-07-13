import React from 'react';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-Up</h2>
        <form className="form login-form" name="signUpForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" name="password-confirmation" />
          </div>
          <input type="submit" className="btn btn-block btn-lg btn-success" value="Sign-Up" />
          <div className="register-bg">
            <div className="register-text-container">
              <a className="register-text">Already a member?</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
