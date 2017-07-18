import dispatcher from '../dispatcher';

export function _setCampaigns(array) {
  dispatcher.dispatch( {
    type: "SET_CAMPAIGNS",
    array,
  });
}
