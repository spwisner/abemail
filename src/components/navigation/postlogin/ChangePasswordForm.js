import React from 'react';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class ChangePasswordForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: CredentialsStore._getUserId(),
      navDropdownClass: CredentialsStore._getNavDropdownClass(),
      glyphiconValue: CredentialsStore._getGlyphiconValue(),
      menuText: CredentialsStore._getMenuText(),
    }

    this.cancelCP = this.cancelCP.bind(this);
    this.toggleNavDropdown = this.toggleNavDropdown.bind(this);
    this._handleCP = this._handleCP.bind(this);
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

      return CredentialsStore._changePassword(data);
    } else {

      return console.error('password !=== passwordconfirm');
    }
  }

  toggleNavDropdown(event) {
    event.preventDefault();
    const dropdownState = this.state.navDropdownClass;

    if (dropdownState === "dropdown") {
      this.setState({
        navDropdownClass: "dropdown-open",
        glyphiconValue: CredentialsStore._setGlyphiconValue("glyphicon glyphicon-collapse-up"),
        menuText: CredentialsStore._setMenuText("Hide"),
      });
      CredentialsStore._setDisplayCPForm(false);
      CredentialsStore._displayNavDropdown(true);
      return;
    } else {
      this.setState({
        navDropdownClass: "dropdown",
        glyphiconValue: CredentialsStore._setGlyphiconValue("glyphicon glyphicon-list"),
        menuText: CredentialsStore._setMenuText("Options"),
      });
      CredentialsStore._setDisplayCPForm(false);
      CredentialsStore._displayNavDropdown(false);
      return;
    }
  }

  cancelCP(event) {
    event.preventDefault();
    CredentialsStore._setDisplayCPForm(false);
    return;
  }

  render() {
    const dropdownClass = CredentialsStore._getNavDropdownClass();
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={dropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.toggleNavDropdown}>{this.state.menuText} <span className={this.state.glyphiconValue}></span></a>
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
                  <button type="button" className="btn btn-sm btn-danger" onClick={this.toggleNavDropdown}>Cancel</button>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

//   render() {
//     const isPasswordError = this.state.passwordError;
//     return (
//       <div>
//         <ul className="nav navbar-nav navbar-right">
//           <li className="dropdown open">
//             <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.clearPasswordErrors}>Options <span className="glyphicon glyphicon-list"></span></a>
//             <div className="dropdown-menu">
//               <div className="container-fluid">
//                 <h2>Change Password</h2>
//                 {isPasswordError ? <p className="error">There has been an error changing your password. Please try again.</p> : null}
//                 <form className="form login-form" name="changePassword" onSubmit={this.handleSubmit}>
//                   <div className="form-group">
//                     <label>Old Password</label>
//                     <input type="text" className="form-control" name="old" />
//                   </div>
//                   <div className="form-group">
//                     <label>New Password:</label>
//                     <input type="password" className="form-control" name="new"/>
//                   </div>
//                   <div className="form-group">
//                     <label>Confirm New Password:</label>
//                     <input type="password" className="form-control" name="confirm"/>
//                   </div>
//                   <input type="submit" className="btn btn-sm btn-success margin-right-btn" value="Submit"/>
//                   <button type="button" className="btn btn-sm btn-danger" onClick={this.handleCancel}>Cancel</button>
//                 </form>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }
