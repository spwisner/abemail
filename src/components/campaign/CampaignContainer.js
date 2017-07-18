import React from 'react';
import CampaignStore from '../../stores/CampaignStore';
import CampaignIndex from './CampaignIndex';
const apiCampaigns = require('../../api/api-campaigns');
import CredentialsStore from '../../stores/CredentialsStore';
import * as CampaignActions from '../../actions/CampaignActions';

class CampaignContainer extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onChangeCanceled = this.onChangeCanceled.bind(this);

    this.state = {
      campaigns: CampaignStore._getCampaigns(),
      isSignedIn: CredentialsStore._getUserStatus(),
    };
  }

  onChange() {
    this.setState({
      isSignedIn: CredentialsStore._getUserStatus()
    })
  }

  onChangeCanceled() {
    console.log('onChangeCanceled');
  }

  componentDidMount() {
    CredentialsStore.addListener("change", this.onChange);
  }

  componentWillUnmount() {
    CredentialsStore.removeListener("change", this.onChange);
  }

  render() {
    return (
      <div>
        <CampaignIndex />
      </div>
    )
  }
}

export default CampaignContainer;
