// import React from 'react';
// import CredentialsStore from '../../../stores/CredentialsStore';
//
// export default class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isSignedIn: CredentialsStore._isSignedIn()
//     };
//
//     this._handleSignOut = this._handleSignOut.bind(this);
//   }
//
//   componentWillMount() {
//     CredentialsStore.on("change", () => {
//       this.setState({
//         isSignedIn: CredentialsStore._isSignedIn(),
//       });
//     });
//   }
//
//   _handleSignIn(event) {
//     event.preventDefault();
//     return CredentialsStore._signOut();
//   }
//
//   render() {
//     return (
//       <div>
//         <form name="signInForm" onSubmit={this._handleSignIn}>
//           <div className="form-group">
//             <input className="form-control" name="email" type="email" placeholder="Email" />
//           </div>
//           <div className="form-group">
//             <input className="form-control" name="password" type="password" placeholder="Password" />
//           </div>
//           <input type="submit" className="btn btn-success" value="Submit"/>
//         </form>
//       </div>
//     )
//   }
// }
