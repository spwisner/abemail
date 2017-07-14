import React from 'react';
import CredentialsStore from '../../stores/CredentialsStore';
import Postlogin from './postlogin/Postlogin';
import Prelogin from './prelogin/Prelogin';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: CredentialsStore._getUserStatus(),
      userId: CredentialsStore._getUserId(),
      userToken: CredentialsStore._getUserToken(),
      displaySignInForm: CredentialsStore._getIsSignInForm(),
      displayCPForm: CredentialsStore._getDisplayCPForm(),
    }
  }

  componentWillMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        isSignedIn: CredentialsStore._getUserStatus(),
        userId: CredentialsStore._getUserId(),
        userToken: CredentialsStore._getUserToken(),
        displaySignInForm: CredentialsStore._getIsSignInForm(),
        displayCPForm: CredentialsStore._getDisplayCPForm(),
      });
    });
  }

  render() {
    const postLoginDisplay = this.state.isSignedIn;
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Save Snippet</span>
            </div>
            <div>
              {postLoginDisplay ? <Postlogin /> : <Prelogin /> }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
