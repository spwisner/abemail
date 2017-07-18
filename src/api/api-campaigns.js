const store = require('../store');
import CredentialsStore from '../stores/CredentialsStore';
const $ = require('jquery');

// Campaigns API

const getCampaigns = function() {
  const userToken = CredentialsStore._getUserToken();
  return $.ajax({
    url: `${store.apiOrigin}/api/campaigns/`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const showCampaign = function(id) {
  const userToken = CredentialsStore._getUserToken();
  return $.ajax({
    url: `${store.apiOrigin}/api/campaigns/${id}/`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const createCampaign = function(data) {
  const userToken = CredentialsStore._getUserToken();
  return $.ajax({
    url: `${store.apiOrigin}/api/campaigns/`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
    data,
  });
};

const deleteCampaign = function(id) {
  const userToken = CredentialsStore._getUserToken();
  return $.ajax({
    url: `${store.apiOrigin}/api/campaigns/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const updateCampaign = function(data, id) {
  const userToken = CredentialsStore._getUserToken();
  return $.ajax({
    url: `${store.apiOrigin}/api/campaigns/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
    data,
  });
};

module.exports = {
  getCampaigns,
  createCampaign,
  deleteCampaign,
  showCampaign,
  updateCampaign,
};
