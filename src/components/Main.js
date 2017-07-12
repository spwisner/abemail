import React from 'react';
import AuctionIndex from './auction/AuctionIndex';
import Home from './Home';
import {Switch, Route} from "react-router-dom";
import AuctionView from './auction/AuctionView';

const Auction = () => (
  <Switch>
    <Route exact path='/auction' component={AuctionIndex} />
    <Route path='/auction/:id' component={AuctionView} />
  </Switch>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/auction' component={Auction}/>
    </Switch>
  </main>
);

export default Main;
