import React from 'react';
import CampaignStore from '../../stores/CampaignStore';
import CampaignIndex from './CampaignIndex';
const apiCampaigns = require('../../api/api-campaigns');
import CredentialsStore from '../../stores/CredentialsStore';
import * as CampaignActions from '../../actions/CampaignActions';

class CampaignContainer extends React.Component {
  constructor() {
    super();

    this.onChangeCredentials = this.onChangeCredentials.bind(this);
    this.onChangeCampaign = this.onChangeCampaign.bind(this);

    this.state = {
      campaigns: CampaignStore._getCampaigns(),
      isSignedIn: CredentialsStore._getUserStatus(),
    };
  }

  onChangeCredentials() {
    this.setState({
      isSignedIn: CredentialsStore._getUserStatus()
    })
  }

  onChangeCampaign() {
    this.setState({
      campaigns: CampaignStore._getCampaigns(),
    })
  }

  componentDidMount() {
    CredentialsStore.addListener("change", this.onChangeCredentials);
    CampaignStore.addListener("change", this.onChangeCampaign);
  }

  componentWillUnmount() {
    CredentialsStore.removeListener("change", this.onChangeCredentials);
    CampaignStore.removeListener("change", this.onChangeCampaign);
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
