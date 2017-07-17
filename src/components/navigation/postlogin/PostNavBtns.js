import React from 'react';
import * as CredentialsActions from '../../../actions/CredentialsActions';

export default class PostNavBtns extends React.Component {
  constructor(props) {
    super(props);

    this._handleCPClick = this._handleCPClick.bind(this);
    this._handleSignOut = this._handleSignOut.bind(this);
  }

  _handleCPClick(event) {
    event.preventDefault();
    CredentialsActions._setDisplayCPForm(true);
    return;
  }

  _handleSignOut(event) {
    event.preventDefault();
    this.props._signOutRequest();
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props._navDropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.props._togglePostNavDropdown}>{this.props._menuText} <span className={this.props._glyphiconValue}></span></a>
              <div className="dropdown-menu small-dropdown-menu">
                <ul className="hide-bullets">
                  <li><a href="#" onClick={this._handleCPClick}><span className="glyphicon glyphicon-wrench"></span>  Change Password</a></li>
                  <li><a href="#" onClick={this._handleSignOut}><span className="glyphicon glyphicon-log-out"></span>  Sign Out</a></li>
                </ul>
              </div>
            </li>
        </ul>
      </div>
    )
  }
}
