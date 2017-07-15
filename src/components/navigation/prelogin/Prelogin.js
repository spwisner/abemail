import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class Prelogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDropdownClass: CredentialsStore._getNavDropdownClass(),
      glyphiconValue: 'glyphicon glyphicon-log-in',
      menuText: "Login",
    };

    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
    this._displayDropdown = this._displayDropdown.bind(this);
  }

  _displayDropdown(bool) {
    console.log(bool);
    if (bool) {
      this.setState({
        navDropdownClass: "dropdown open",
        glyphiconValue: "glyphicon glyphicon-collapse-up",
        menuText: "Hide",
      });
      return CredentialsStore._displayNavDropdown(true);
    } else {
      this.setState({
        navDropdownClass: "dropdown",
        glyphiconValue: "glyphicon glyphicon-log-in",
        menuText: "Login",
      });
      return CredentialsStore._displayNavDropdown(false);
    }
  }

  toggleNavDropdown(event) {
    event.preventDefault();
    const dropdownState = this.state.navDropdownClass;

    if (dropdownState === "dropdown") {
      this.setState({
        navDropdownClass: "dropdown-open",
        glyphiconValue: "glyphicon glyphicon-collapse-up",
        menuText: "Hide",
      });
      return CredentialsStore._displayNavDropdown(true);
    } else {
      this.setState({
        navDropdownClass: "dropdown",
        glyphiconValue: "glyphicon glyphicon-log-in",
        menuText: "Login",
      });
      return CredentialsStore._displayNavDropdown(false);
    }
  }

  render() {
    const showSignInForm = CredentialsStore._getIsSignInForm();
    const dropdownClass = CredentialsStore._getNavDropdownClass();
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={dropdownClass}>
            <a id="a-nav-dropdown" className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.toggleNavDropdown}>{this.state.menuText} <span className={this.state.glyphiconValue}></span></a>
            <div className="dropdown-menu">
              {showSignInForm ? <SignIn _displayDropdown={this._displayDropdown} /> : <SignUp _displayDropdown={this._displayDropdown}/>}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
