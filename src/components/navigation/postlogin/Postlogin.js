import React from 'react';
import PostNavBtns from './PostNavBtns';
import ChangePasswordForm from './ChangePasswordForm';
import * as CredentialsActions from '../../../actions/CredentialsActions';
const apiAuth = require('../../../api/api-credentials');
import {withRouter} from "react-router-dom";


class Postlogin extends React.Component {
  constructor(props) {
    super(props);

    this._togglePostNavDropdown = this._togglePostNavDropdown.bind(this);
    this._cancelPostLogin = this._cancelPostLogin.bind(this);
    this._signOutRequest = this._signOutRequest.bind(this);
  }

  _cancelPostLogin(event) {
    event.preventDefault();
    CredentialsActions._togglePostNavDropdown("dropdown open");
    return;
  }

  _togglePostNavDropdown(event) {
    event.preventDefault();
    const dropdownState = this.props._navDropdownClass;
    CredentialsActions._togglePostNavDropdown(dropdownState);
  }

  _redirectPath() {
    this.props.history.push("/");
  }

  _signOutRequest() {
    apiAuth.signOut()
      .done((response) => {
        CredentialsActions._setIsSignedIn(false);
        CredentialsActions._setUserId("");
        CredentialsActions._setUserToken();
        CredentialsActions._togglePreNavDropdown("dropdown open");
        CredentialsActions._setDisplayCPForm(false);
        this._redirectPath();
        return;
      })
      .fail((response) => {
        if (response.status === 404) {
          return console.error('fail: 404 Not found');
        } else if (response.status === 0) {
          return console.error('server error');
        }
      });
  }

  render() {
    const displayForm = this.props._displayCPForm;
    return (
      <div>
          {displayForm ?
            <ChangePasswordForm
              _navDropdownClass={this.props._navDropdownClass}
              _glyphiconValue={this.props._glyphiconValue}
              _menuText={this.props._menuText}
              _cancelPostLogin={this._cancelLogin}
              _userId={this.props._userId}
              _togglePostNavDropdown={this._togglePostNavDropdown}
              _signOutRequest={this._signOutRequest}
            />
            :
            <PostNavBtns
              _navDropdownClass={this.props._navDropdownClass}
              _glyphiconValue={this.props._glyphiconValue}
              _menuText={this.props._menuText}
              _cancelPostLogin={this._cancelLogin}
              _togglePostNavDropdown={this._togglePostNavDropdown}
              _signOutRequest={this._signOutRequest}
            />
          }
      </div>
    )
  }
}

export default withRouter(Postlogin);
