const store = require('../store');
import CredentialsStore from '../stores/CredentialsStore';
// const userToken = CredentialsStore._getUserToken();
// const userId = CredentialsStore._getUserId();

const userToken = "";
const userId = "";
const $ = require('jquery');

// Login Api

const signUp = function(data) {
  return $.ajax({
    url: `${store.apiOrigin}/api/sign-up/`,
    method: 'POST',
    data,
  });
};

const signIn = function(data) {
  return $.ajax({
    url: `${store.apiOrigin}/api/sign-in/`,
    method: 'POST',
    data,
  });
};

const signOut = function() {
  return $.ajax({
    url: `${store.apiOrigin}/api/sign-out/${userId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const changePassword = function(data) {
  return $.ajax({
    url: `${store.apiOrigin}/api/change-password/${userId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
