// 'use strict';
//
// import React from 'react';
// import SignOut from './SignOut.jsx'
//
// export default class ChangePasswordBtn extends React.Component {
//   constructor() {
//     super();
//
//     this.handleCPClick = this.handleCPClick.bind(this);
//   }
//
//   handleCPClick(event) {
//     event.preventDefault();
//     this.props.changeDisplayState(true);
//     return;
//   }
//
//   render() {
//     return (
//       <div>
//         <ul className="nav navbar-nav navbar-right">
//           <li className="dropdown">
//             <a className="dropdown-toggle" data-toggle="dropdown" href="#">Options <span className="glyphicon glyphicon-list"></span></a>
//               <ul className="dropdown-menu">
//                 <li><a href="#" onClick={this.handleCPClick}>Change Password</a></li>
//                 <SignOut loginStatus={this.props.loginStatus}/>
//               </ul>
//             </li>
//           </ul>
//       </div>
//     )
//   }
// }
