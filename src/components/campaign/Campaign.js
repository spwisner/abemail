import React from 'react';
import CompaignContainer from './CampaignContainer';
import {Switch, Route} from "react-router-dom";
import CampaignView from './CampaignView';

const Campaign = () => (
  <Switch>
    <Route exact path='/campaigns' component={CompaignContainer} />
    <Route path='/campaigns/:id' component={CampaignView} />
  </Switch>
)

export default Campaign;
