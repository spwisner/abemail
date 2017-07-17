import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CredentialsStore from '../../../stores/CredentialsStore';
const apiAuth = require('../../../api/api-credentials');
import {withRouter} from "react-router-dom";

class Prelogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDropdownClass: CredentialsStore._getNavDropdownClass(),
      glyphiconValue: 'glyphicon glyphicon-log-in',
      menuText: "Login",
    };

    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
    this._displayDropdown = this._displayDropdown.bind(this);
    this._signIn = this._signIn.bind(this);
  }

  _displayDropdown(bool) {
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

  _redirectFunction() {
    this.props.history.push("/auction");
  }

  _signIn(data) {
    apiAuth.signIn(data)
    .done((response) => {

      CredentialsStore._setSuccessfulLogin(response);

      this._redirectFunction();

      return;
    })
    .fail((response) => {
      if (response.statusText === "Unauthorized") {
        return console.error('fail: Unauthorized');
      } else if (response.statusText === "error") {
        return console.error('server error');
      }
    });
  }

  render() {
    const showSignInForm = CredentialsStore._getIsSignInForm();
    const dropdownClass = CredentialsStore._getNavDropdownClass();
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={dropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.toggleNavDropdown}>{this.state.menuText} <span className={this.state.glyphiconValue}></span></a>
            <div className="dropdown-menu large-dropdown-menu">
              {showSignInForm ? <SignIn _displayDropdown={this._displayDropdown} _signIn={this._signIn}/> : <SignUp _displayDropdown={this._displayDropdown} _signIn={this._signIn}/>}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Prelogin);
