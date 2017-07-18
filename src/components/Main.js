import React from 'react';
import Home from './Home';
import {Switch, Route} from "react-router-dom";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </main>
  )
}

export default Main;
