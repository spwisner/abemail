import React from 'react';
import SignOut from './SignOut'
import CredentialsStore from '../../../stores/CredentialsStore';

export default class PostNavBtns extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: CredentialsStore._getUserId(),
      displayDropdown: "dropdown",
    }

    this.handleCPClick = this.handleCPClick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.setDisplayPostDropdown = this.setDisplayPostDropdown.bind(this);
  }

  handleCPClick(event) {
    event.preventDefault();
    CredentialsStore._setDisplayCPForm(true);
    return;
  }

  handleSignOut(event) {
    event.preventDefault();
    const id = this.state.userId;
    CredentialsStore._signOut(id);
  }

  setDisplayPostDropdown(event) {
    event.preventDefault();
    const currentDisplayDropdown = this.state.displayDropdown;
    if (currentDisplayDropdown === "dropdown") {
      return this.setState({
        displayDropdown: "dropdown open",
      })
    } else {
      return this.setState({
        displayDropdown: "dropdown"
      })
    }
  }

  render() {
    const displayDropClass = this.state.displayDropdown;
    return (




      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={displayDropClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.setDisplayPostDropdown}>Options <span className="glyphicon glyphicon-list"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this.handleCPClick}>Change Password</a></li>
                <SignOut />
              </ul>
            </li>
          </ul>
        </div>
    )
  }
}
