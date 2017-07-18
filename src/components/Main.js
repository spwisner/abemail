import React from 'react';
import Home from './Home';
import {Switch, Route} from "react-router-dom";
// import CredentialsStore from '../stores/CredentialsStore';
import Campaign from './campaign/Campaign';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/campaigns' component={Campaign}/>
      </Switch>
    </main>
  )
}

export default Main;
