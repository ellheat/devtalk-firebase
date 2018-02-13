import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


export class Home extends PureComponent {
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
    userProfile: PropTypes.object.isRequired,
  };

  componentWillMount() {

  }

  render() {
    return (
      <div className="home">
        <Helmet title="Homepage" />

        { !this.props.isUserLogged && <button onClick={this.props.signIn}>Zaloguj się</button>}
        { this.props.isUserLogged && <span>Witaj {this.props.userProfile.get('displayName')}</span>}

      </div>
    );
  }
}
