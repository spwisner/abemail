import React from 'react';
import PostNavBtns from './PostNavBtns';
import ChangePasswordForm from './ChangePasswordForm';
import CredentialsStore from '../../../stores/CredentialsStore';


export default class Postlogin extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCPForm: CredentialsStore._getDisplayCPForm(),
    }
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
