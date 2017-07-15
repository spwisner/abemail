import React from 'react';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class PostNavBtns extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: CredentialsStore._getUserId(),
      navDropdownClass: CredentialsStore._getNavDropdownClass(),
      glyphiconValue: CredentialsStore._getGlyphiconValue(),
      menuText: CredentialsStore._getMenuText(),
    }

    this.handleCPClick = this.handleCPClick.bind(this);
    this._handleSignOut = this._handleSignOut.bind(this);
    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
  }

  handleCPClick(event) {
    event.preventDefault();
    CredentialsStore._setDisplayCPForm(true);
    return;
  }

  _handleSignOut(event) {
    event.preventDefault();
    const id = this.state.userId;
    return CredentialsStore._signOut(id);
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
      CredentialsStore._setGlyphiconValue("glyphicon glyphicon-collapse-up");
      CredentialsStore._setMenuText("Hide");
      return CredentialsStore._displayNavDropdown(true);
    } else {
      this.setState({
        navDropdownClass: "dropdown",
        glyphiconValue: CredentialsStore._setGlyphiconValue("glyphicon glyphicon-list"),
        menuText: CredentialsStore._setMenuText("Options"),
      });
      return CredentialsStore._displayNavDropdown(false);
    }
  }

  render() {
    const dropdownClass = CredentialsStore._getNavDropdownClass();
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={dropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.toggleNavDropdown}>{this.state.menuText} <span className={this.state.glyphiconValue}></span></a>
              <div className="dropdown-menu small-dropdown-menu">
                <ul className="hide-bullets">
                  <li><a href="#" onClick={this.handleCPClick}><span className="glyphicon glyphicon-wrench"></span>  Change Password</a></li>
                  <li><a href="#" onClick={this._handleSignOut}><span className="glyphicon glyphicon-log-out"></span>  Sign Out</a></li>
                </ul>
              </div>
            </li>
        </ul>
      </div>
    )
  }
}
