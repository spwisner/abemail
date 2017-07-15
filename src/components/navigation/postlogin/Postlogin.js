import React from 'react';
import PostNavBtns from './PostNavBtns';
import ChangePasswordForm from './ChangePasswordForm';
import CredentialsStore from '../../../stores/CredentialsStore';

// function Postlogin() {
//   const displayForm = CredentialsStore._getDisplayCPForm();
//   return (
//     <div>
//         {displayForm ? <ChangePasswordForm /> : <PostNavBtns /> }
//     </div>
//   )
// }

export default class Postlogin extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCPForm: CredentialsStore._getDisplayCPForm(),
    }
  }

  componentDidMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        displayCPForm: CredentialsStore._getDisplayCPForm(),
      })
    })
  }

  render() {
    const displayForm = CredentialsStore._getDisplayCPForm();
    return (
      <div>
          {displayForm ? <ChangePasswordForm /> : <PostNavBtns /> }
      </div>
    )
  }
}
