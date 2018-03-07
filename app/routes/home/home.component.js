import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';


export class Home extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    isUserLogged: PropTypes.bool.isRequired,
    signIn: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userProfile: PropTypes.object.isRequired,
  };

  renderLoggedOut = () => (
    <button onClick={this.props.signIn}>Zaloguj się</button>
  );

  renderLoggedIn = () => {
    const { userProfile } = this.props;

    return (
      <div>
        Witaj {userProfile.get('displayName')} <br />
        email: {userProfile.get('email')}<br />
        avatar: <img src={userProfile.get('photoURL')} alt={userProfile.get('displayName')} /><br />
        <br />
        <br />
        <Link to="/en/chat">Chat</Link>
        <br />
        <br />
        <br />
        <button onClick={this.props.logout}>wyloguj</button>
      </div>
    );
  };

  render() {
    return (
      <div className="home">
        <Helmet title="Homepage" />

        {this.props.isUserLogged ? this.renderLoggedIn() : this.renderLoggedOut()}
      </div>
    );
  }
}
