import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const apiAuctions = require('../api/api-auctions');

class AuctionStore extends EventEmitter {
  constructor() {
    super();
    this.auctions = [];
  }

  _getAuctions() {
    console.log('getting auctions from store');
    console.log(this.auctions);
    return this.auctions;
  }

  _setAuctions(data) {
    console.log(data);
    this.auctions = data;
    this.emit("change");
    return;
  }

  handleActions(action) {
    switch(action.type) {
      case "SET_AUCTIONS": {
        this._setAuctions(action.object);
        break;
      }

      default:
        return undefined;
    }
  }
}

const auctionStore = new AuctionStore();

dispatcher.register(auctionStore.handleActions.bind(auctionStore));

export default auctionStore;
