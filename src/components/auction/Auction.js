import React from 'react';
import AuctionIndex from './AuctionIndex';
import {Switch, Route} from "react-router-dom";
import AuctionView from './AuctionView';

const Auction = () => (
  <Switch>
    <Route exact path='/auction' component={AuctionIndex} />
    <Route path='/auction/:id' component={AuctionView} />
  </Switch>
)

export default Auction;
