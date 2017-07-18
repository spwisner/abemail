import React from 'react';
import CampaignStore from '../../stores/CampaignStore';
import CampaignIndex from './CampaignIndex';
const apiCampaigns = require('../../api/api-campaigns');
import CredentialsStore from '../../stores/CredentialsStore';
import * as CampaignActions from '../../actions/CampaignActions';

class CampaignContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: CampaignStore._getCampaigns(),
      isSignedIn: CredentialsStore._getUserStatus(),
    };
  }

  componentDidMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        isSignedIn: CredentialsStore._getUserStatus(),
      });
    });

    CampaignStore.on("change", () => {
      this.setState({
        campaigns: CampaignStore._getCampaigns(),
      });
    });

    return;
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
