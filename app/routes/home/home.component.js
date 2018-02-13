import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


export class Home extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    language: PropTypes.string.isRequired,
    fetchMaintainers: PropTypes.func.isRequired,
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
    this.props.fetchMaintainers(this.props.language);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language !== this.props.language) {
      this.props.fetchMaintainers(nextProps.language);
    }
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
