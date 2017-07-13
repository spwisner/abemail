const store = require('../store');
const apiOrigin = store.apiOrigin;
const userToken = store.user.token;

// Auctions API

const getAuctions = function() {
  return $.ajax({
    url: `${apiOrigin}/api/auctions`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const showAuction = function(id) {
  return $.ajax({
    url: `${apiOrigin}/api/auctions/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const createAuction = function(data) {
  return $.ajax({
    url: `${apiOrigin}/api/auctions`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
    data,
  });
};

const deleteAuction = function(id) {
  return $.ajax({
    url: `${apiOrigin}/api/auctions/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const updateAuction = function(data, id) {
  return $.ajax({
    url: `${apiOrigin}/api/auctions/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
    data,
  });
};

module.exports = {
  getAuctions,
  createAuction,
  deleteAuction,
  showAuction,
  updateAuction,
};
