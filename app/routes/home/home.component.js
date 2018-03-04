import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { RoomForm } from './roomForm/roomForm.component';

import { Link } from './home.styles';


export class Home extends PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    addRoom: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    isUserLogged: PropTypes.bool.isRequired,
    signIn: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    createRoomsListener: PropTypes.func.isRequired,
    removeRoomsListener: PropTypes.func.isRequired,
    userProfile: PropTypes.object.isRequired,
    rooms: PropTypes.object,
  };

  componentDidMount() {
    this.props.createRoomsListener();
  }

  componentWillUnmount() {
    this.props.removeRoomsListener();
  }

  renderLoggedOut = () => (
    <button onClick={this.props.signIn}>Zaloguj się</button>
  );

  renderRooms = () => this.props.rooms.map((data, index) => (
    <Link key={index} to={`/en/chat/${data}`}>
      <button>Chat {data}</button>
    </Link>
  ));

  renderLoggedIn = () => {
    const { userProfile } = this.props;

    return (
      <div>
        Witaj {userProfile.get('displayName')} <br />
        email: {userProfile.get('email')}<br />
        avatar: <img src={userProfile.get('photoURL')} alt={userProfile.get('displayName')} /><br />
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
        {this.renderRooms()}
        <RoomForm onSubmit={this.props.addRoom} />
      </div>
    );
  }
}
