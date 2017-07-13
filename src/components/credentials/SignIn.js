import React from 'react';
import CredentialsStore from '../../stores/CredentialsStore';
import * as CredentialsActions from '../../actions/CredentialsActions';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: CredentialsStore._getUserId(),
      userToken: CredentialsStore._getUserToken(),
    };

    this._handleSignIn = this._handleSignIn.bind(this);
  }

  componentWillMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        userId: CredentialsStore._getUserId(),
        userToken: CredentialsStore._getUserToken(),
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

    form.email.value = "";
    form.password.value = "";

    return CredentialsStore._signIn(data);
  }

  render() {
    return (
      <div>
      <form name="signInForm" onSubmit={this._handleSignIn}>
          <div className="form-group">
            <input className="form-control" name="email" type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input className="form-control" name="password" type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn btn-success" value="Submit"/>
        </form>
      </div>
    )
  }
}
