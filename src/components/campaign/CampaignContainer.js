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

    const isSignedIn = this.state.isSignedIn;
    if (isSignedIn) {
      this.campaignsGetRequest();
      console.log('get request)');
    }

    return;
  }

  campaignsGetRequest() {
    apiCampaigns.getCampaigns()
      .done((response) => {
        console.log(response)
        CampaignActions._setCampaigns(response);
      })
      .fail((error) => {
        console.log(error);
      });
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
