import React from 'react';
import * as CredentialsActions from '../../../actions/CredentialsActions';
const apiAuth = require('../../../api/api-credentials');

export default class ChangePasswordForm extends React.Component {
  constructor() {
    super();

    this._handleCP = this._handleCP.bind(this);
  }

  _changePassword(data) {
    apiAuth.changePassword(data)
    .done(() => {
      console.log('password changed');
      this.props._signOutRequest();
      return;
    })
    .fail(() => {
      console.error('fail');
    });
  }

  _handleCP(event) {
    event.preventDefault();
    const form = document.forms.changePasswordForm;

    const data = {
      passwords: {
        old: form.old.value,
        new: form.new.value,
      }
    };

    if (form.new.value === form.passwordconfirm.value) {
      form.new.value = "";
      form.passwordconfirm.value = "";

      return this._changePassword(data);
    } else {

      return console.error('password !=== passwordconfirm');
    }
  }

  cancelCP(event) {
    event.preventDefault();
    CredentialsActions._setDisplayCPForm(false);
    return;
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props._navDropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.props._togglePostNavDropdown}  >{this.props._menuText} <span className={this.props._glyphiconValue}></span></a>
            <div className="dropdown-menu large-dropdown-menu">
              <div className="container-fluid">
                <h2>Change Password</h2>
                <form className="form login-form" name="changePasswordForm" onSubmit={this._handleCP}>
                  <div className="form-group">
                    <label>Old Password</label>
                    <input type="text" className="form-control" name="old" />
                  </div>
                  <div className="form-group">
                    <label>New Password:</label>
                    <input type="password" className="form-control" name="new"/>
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password:</label>
                    <input type="password" className="form-control" name="passwordconfirm"/>
                  </div>
                  <input type="submit" className="btn btn-sm btn-success margin-right-btn" value="Submit"/>
                  <button type="button" className="btn btn-sm btn-danger" onClick={this.props._togglePostNavDropdown}>Cancel</button>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
