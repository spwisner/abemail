import React from 'react';
import SignIn from './credentials/SignIn';
import CredentialsStore from '../../stores/CredentialsStore';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownClass: CredentialsStore._getNavDropdownClass(),
    }

    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
  }

  toggleNavDropdown(event) {
    event.preventDefault();
    const dropdownState = this.state.dropdownClass;

    if (dropdownState === "dropdown") {
      this.setState({
        dropdownClass: "dropdown open"
      });
    } else {
      this.setState({
        dropdownClass: "dropdown"
      });
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand" href="#">Silent Auction</span>
            </div>
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li className={this.state.dropdownClass}>
                  <a className="dropdown-toggle" data-toggle="dropdown" onClick={this.toggleNavDropdown} href="#">Login <span className="glyphicon glyphicon-log-in"></span></a>
                  <div className="dropdown-menu">
                    <SignIn />
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}
