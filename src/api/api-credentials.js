const store = require('../store');
const apiOrigin = store.apiOrigin;
const userToken = store.user.token;
const userId = store.user.id;

// Login Api

const signUp = function(data) {
  return $.ajax({
    url: `${apiOrigin}/api/sign-up/`,
    method: 'POST',
    data,
  });
};

const signIn = function(data) {
  return $.ajax({
    url: `${apiOrigin}/api/sign-in/`,
    method: 'POST',
    data,
  });
};

const signOut = function() {
  return $.ajax({
    url: `${apiOrigin}/api/sign-out/${userId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${userToken}`,
    },
  });
};

const changePassword = function(data) {
  return $.ajax({
    url: `${apiOrigin}/api/change-password/${userId}`,
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
