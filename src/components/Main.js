import React from 'react';
import AuctionIndex from './auction/AuctionIndex';
import Home from './Home';
import {Switch, Route} from "react-router-dom";
import AuctionView from './auction/AuctionView';
import SignIn from './navigation/prelogin/SignIn';
import CredentialsStore from '../stores/CredentialsStore';
import Auction from './auction/Auction';



// componentDidMount: function() {
//     CommonStore.addChangeListener(this._handleChangeStore);
// },
//
// componentDidMount() {
//   CredentialsStore.on("change", () => {
//     this.setState({
//       isSignedIn: CredentialsStore._getUserStatus(),
//     });
//   });
// }
//
// const Auction = () => (
//   <Switch>
//     <Route exact path='/auction' component={AuctionIndex} />
//     <Route path='/auction/:id' component={AuctionView} />
//   </Switch>
// )

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
