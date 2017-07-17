//
// import CredentialsStore from '../stores/CredentialsStore';
// const store = require('../store');
// const $ = require('jquery');
//
// // Auctions API
//
// const getAuctions = function() {
//   const userToken = CredentialsStore._getUserToken();
//   return $.ajax({
//     url: `${store.apiOrigin}/api/auctions`,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${userToken}`,
//     },
//   });
// };
//
// const showAuction = function(id) {
//   const userToken = CredentialsStore._getUserToken();
//   return $.ajax({
//     url: `${store.apiOrigin}/api/auctions/${id}`,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${userToken}`,
//     },
//   });
// };
//
// const createAuction = function(data) {
//   const userToken = CredentialsStore._getUserToken();
//   return $.ajax({
//     url: `${store.apiOrigin}/api/auctions`,
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${userToken}`,
//     },
//     data,
//   });
// };
//
// const deleteAuction = function(id) {
//   const userToken = CredentialsStore._getUserToken();
//   return $.ajax({
//     url: `${store.apiOrigin}/api/auctions/${id}`,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${userToken}`,
//     },
//   });
// };
//
// const updateAuction = function(data, id) {
//   const userToken = CredentialsStore._getUserToken();
//   return $.ajax({
//     url: `${store.apiOrigin}/api/auctions/${id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${userToken}`,
//     },
//     data,
//   });
// };
//
// module.exports = {
//   getAuctions,
//   createAuction,
//   deleteAuction,
//   showAuction,
//   updateAuction,
// };
