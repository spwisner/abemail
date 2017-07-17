import React from 'react';
import Home from './Home';
import {Switch, Route} from "react-router-dom";
import CredentialsStore from '../stores/CredentialsStore';
import Auction from './auction/Auction';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      isSignedIn: CredentialsStore._getUserStatus()
    }
  }

  componentDidMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        isSignedIn: CredentialsStore._getUserStatus(),
      });
    });
  }

  render() {
    const isSignedIn = this.state.isSignedIn;
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          {isSignedIn ?
          <Route path='/auction' component={Auction}/>
          : null  }
        </Switch>
      </main>
    )
  }
}

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Home}/>
//       {isSignedIn ?
//       <Route path='/auction' component={Auction}/>
//       : null  }
//     </Switch>
//   </main>
// );
//
// export default Main;
