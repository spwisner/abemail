import React from 'react';
import CampaignStore from '../../stores/CampaignStore';
import CampaignIndex from './CampaignIndex';

class CampaignContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: CampaignStore._getCampaigns(),
    };
  }

  render() {
    return (
      <CampaignIndex />
    )
  }
}

export default CampaignContainer;
