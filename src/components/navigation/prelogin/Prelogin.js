import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class Prelogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDropdownClass: CredentialsStore._getNavDropdownClass(),
    }

    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
  }

  toggleNavDropdown(event) {
    event.preventDefault();
    const dropdownState = this.state.navDropdownClass;

    if (dropdownState === "dropdown") {
      this.setState({
        navDropdownClass: "dropdown-open"
      });
      return CredentialsStore._displayNavDropdown(true);
    } else {
      this.setState({
        navDropdownClass: "dropdown"
      });
      return CredentialsStore._displayNavDropdown(false);
    }
  }

  componentWillMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        navDropdownClass: CredentialsStore._getNavDropdownClass(),
      });
    });
  }

  render() {
    const showSignInForm = CredentialsStore._getIsSignInForm();
    const dropdownClass = CredentialsStore._getNavDropdownClass();
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={dropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.toggleNavDropdown}>Login <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              {showSignInForm ? <SignIn /> : <SignUp />}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
