import React from 'react';
import CredentialsStore from '../../stores/CredentialsStore';
import Postlogin from './postlogin/Postlogin';
import Prelogin from './prelogin/Prelogin';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: CredentialsStore._getUserStatus(),
      navDropdownClass: CredentialsStore._getNavDropdownClass(),
      glyphiconValue: CredentialsStore._getGlyphiconValue(),
      menuText: CredentialsStore._getMenuText(),
      displaySignInForm: CredentialsStore._getIsSignInForm(),
      displayCPForm: CredentialsStore._getDisplayCPForm(),
      userId: CredentialsStore._getUserId(),
    }
  }

  componentDidMount() {
    CredentialsStore.on("change", () => {
      this.setState({
        isSignedIn: CredentialsStore._getUserStatus(),
        navDropdownClass: CredentialsStore._getNavDropdownClass(),
        glyphiconValue: CredentialsStore._getGlyphiconValue(),
        menuText: CredentialsStore._getMenuText(),
        displaySignInForm: CredentialsStore._getIsSignInForm(),
        displayCPForm: CredentialsStore._getDisplayCPForm(),
        userId: CredentialsStore._getUserId(),
      });
    });
  }

  render() {
    const postLoginDisplay = this.state.isSignedIn;
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Silent Auction</span>
            </div>
            <div>
              {postLoginDisplay ?
                <Postlogin
                  _navDropdownClass={this.state.navDropdownClass}
                  _glyphiconValue={this.state.glyphiconValue}
                  _menuText={this.state.menuText}
                  _displayCPForm={this.state.displayCPForm}
                  _userId={this.state.userId}
                />
                :
                <Prelogin
                  _navDropdownClass={this.state.navDropdownClass}
                  _glyphiconValue={this.state.glyphiconValue}
                  _menuText={this.state.menuText}
                  _displaySignInForm={this.state.displaySignInForm}
                /> }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
