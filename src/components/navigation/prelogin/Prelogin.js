import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class Prelogin extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownClass: CredentialsStore._getNavDropdownClass(),
      displaySignInForm: CredentialsStore._getIsSignInForm(),
    };

    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
  }

  componentWillMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        displaySignInForm: CredentialsStore._getIsSignInForm(),
      });
    });
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
    const showSignInForm = this.state.displaySignInForm;
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.state.dropdownClass}>
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
