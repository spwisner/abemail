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

  _setCampaigns(data) {
    this.campaigns = data;
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {

      case "SET_CAMPAIGNS": {
        this._setCampaigns(action.object);
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
