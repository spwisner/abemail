import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const apiCampaigns = require('../api/api-campaigns');


class CampaignStore extends EventEmitter {
  constructor() {
    super();
    this.campaigns = [];
  }

  ////////API
  _campaignsGetRequest() {
    apiCampaigns.getCampaigns()
      .done((response) => {
        console.log(response)
        this.campaigns = response;
      })
      .fail((error) => {
        console.log(error);
      });
  }

  ////////End API

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
