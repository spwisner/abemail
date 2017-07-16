import React from 'react';
import CredentialsStore from '../../stores/CredentialsStore';
import AuctionStore from '../../stores/AuctionStore';

import {withRouter} from "react-router-dom";
const apiAuctions = require('../../api/api-auctions');

class AuctionIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      isSignedIn: CredentialsStore._getUserStatus(),
      auctions: [],
    }
  }

  componentWillMount() {
    apiAuctions.getAuctions()
      .done((response) => {
        AuctionStore._setAuctions(response);
        this.setState({
          auctions: AuctionStore._getAuctions()
        })
        return;
      })
      .fail((response) => {
        if (response.statusText === "Unauthorized") {
          return console.log('fail: Unauthorized');
        } else if (response.statusText === "error") {
          return console.log('server error');
        }
      });
  }

  componentDidMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        isSignedIn: CredentialsStore._getUserStatus(),
      })
    });
    // AuctionStore.on("change", () => {
    //   this.setState({
    //     auctions: AuctionStore._getAuctions(),
    //   });
    // });
  }

  signInApproved(state) {
    if (!state) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log('render');
    const userSignedIn = this.signInApproved(this.state.isSignedIn);
    const auctions = this.state.auctions;
    console.log(auctions);
    return (
      <div>
        {userSignedIn ?
        <h3 className="text-underline">Auction Items</h3>

        : null
        }
      </div>
    )
  }
}

export default withRouter(AuctionIndex);
