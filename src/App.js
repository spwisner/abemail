import React from 'react';
import Navigation from './components/navigation/Navigation'
import Main from './components/Main';
import './style/index.css';

const store = require('./store.js');

const config = {
  apiOrigins: {
    production: 'heroku',
    development: 'http://localhost:4741'
  },
};

store.apiOrigin = config.apiOrigins.development;

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
);

export default App;
