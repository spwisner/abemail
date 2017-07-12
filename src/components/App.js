import React from 'react';
import Navigation from './navigation/Navigation.js';
import Main from './Main.js';
import '../style/index.css';

const store = require('../store.js');

const config = {
  apiOrigins: {
    production: 'heroku',
    development: 'http://localhost:4741'
  },
};

store.api = config.apiOrigins.development;

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
);

module.exports = App;
