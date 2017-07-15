import React from 'react';
import CredentialsStore from '../../../stores/CredentialsStore';

export default class ChangePasswordForm extends React.Component {
  constructor() {
    super();

    this.cancelCP = this.cancelCP.bind(this);
  }

  cancelCP(event) {
    event.preventDefault();
    CredentialsStore._setDisplayCPForm(false);
    return;
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown open">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.cancelCP}>Options <span className="glyphicon glyphicon-list"></span></a>
            <div className="dropdown-menu">
              <div className="container-fluid">
                <h2>Change Password</h2>
                <form className="form login-form" name="changePassword">
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
                    <input type="password" className="form-control" name="confirm"/>
                  </div>
                  <input type="submit" className="btn btn-sm btn-success margin-right-btn" value="Submit"/>
                  <button type="button" className="btn btn-sm btn-danger" onClick={this.cancelCP}>Cancel</button>
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
