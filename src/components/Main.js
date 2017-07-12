import React from 'react';
import AuctionIndex from './auction/AuctionIndex';
import Home from './Home';
import {Switch, Route} from "react-router-dom"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/auction' component={AuctionIndex}/>
    </Switch>
  </main>
);

export default Main;
