import { EventEmitter } from "events";
import dispatcher from '../dispatcher';

class CampaignStore extends EventEmitter {
  constructor() {
    super();
    this.campaigns = [];
  }

  _getCampaigns() {
    return this.campaigns;
  }

  _setCampaigns(array) {
    this.campaigns = array;
    this.emit("change");
    return;
  }

  handleActions(action) {
    switch(action.type) {

      case "SET_CAMPAIGNS": {
        this._setCampaigns(action.array);
        break;
      }

      default:
        return undefined;
    }
  }
}

  const campaignStore = new CampaignStore();

  dispatcher.register(campaignStore.handleActions.bind(campaignStore));

  // window.dispatcher = test
  export default campaignStore;
