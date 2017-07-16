import React from 'react';
import CredentialsStore from '../../stores/CredentialsStore';
import {withRouter} from "react-router-dom";
const apiAuctions = require('../../api/api-auctions');

class AuctionIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      isSignedIn: CredentialsStore._getUserStatus()
    }
  }

  componentDidMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        isSignedIn: CredentialsStore._getUserStatus()
      })
    });
    apiAuctions.getAuctions()
      .done((response) => {
        console.log(response);

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

  signInApproved(state) {
    if (!state) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const userSignedIn = this.signInApproved(this.state.isSignedIn);
    console.log(userSignedIn);
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
