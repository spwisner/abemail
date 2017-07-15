import React from 'react';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: CredentialsStore._getUserId()
    }

    this._handleSignOut = this._handleSignOut.bind(this);
  }

  _handleSignOut(event) {
    event.preventDefault();
    const id = this.state.userId;
    return CredentialsStore._signOut(id);
  }

  render() {
    return (
        <li><a href="#" onClick={this._handleSignOut}>Sign Out</a></li>
    )
  }
}
