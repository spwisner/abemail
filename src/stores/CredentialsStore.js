import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const apiAuth = require('../api/api-credentials');
class CredentialsStore extends EventEmitter {
  constructor() {
    super();
    this.credentials = [];
    this.userId = 0;
    this.userToken = "";
  }

  _signIn(data) {
    apiAuth.signIn(data)
    .then((response) => {
      this.credentials = response.user;
      this.userId = response.user.id;
      this.userToken = response.user.token
      console.log(this.credentials);
      return this.emit("change");;
    })
    .done(console.log('success'))
    .catch(console.error('fail'));
  };

  _getUserId() {
    return this.userId;
  };

  _getUserToken() {
    return this.userToken;
  };

  handleActions(action) {
    switch(action.type) {
      case "SIGN_IN": {
        this._signIn(action.object);
        break;
      }

      default:
        return undefined;
    }
  }
}

const credentialsStore = new CredentialsStore();

dispatcher.register(credentialsStore.handleActions.bind(credentialsStore));

export default credentialsStore;
