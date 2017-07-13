const store = require('../store');
import CredentialsStore from '../stores/CredentialsStore';
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
  const userToken = CredentialsStore._getUserToken();
  const userId = CredentialsStore._getUserId();
  return $.ajax({
    url: `${store.apiOrigin}/api/sign-out/${userId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const changePassword = function(data) {
  const userToken = CredentialsStore._getUserToken();
  const userId = CredentialsStore._getUserId();
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
