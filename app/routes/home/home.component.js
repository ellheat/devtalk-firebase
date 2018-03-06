import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { RoomForm } from './roomForm/roomForm.component';

import {
  AvatarImage,
  Link,
  UserActionButton,
  UserData,
  UserName,
  UserPanel,
  LogoutButton,
  UserMenu,
  MenuItem,
  Sidebar,
  RoomButton,
} from './home.styles';


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

  state = {
    userMenuOpened: false,
  };

  componentDidMount() {
    this.props.createRoomsListener();
  }

  componentWillUnmount() {
    this.props.removeRoomsListener();
  }

  toggleUserMenu() {
    this.setState({ userMenuOpened: !this.state.userMenuOpened });
  }

  renderLoggedOut = () => (
    <UserActionButton onClick={this.props.signIn}>Log in</UserActionButton>
  );

  renderRooms = () => this.props.rooms.map((data, index) => (
    <Link key={index} to={`/en/chat/${data}`}>
      <RoomButton>{`${data} chat`}</RoomButton>
    </Link>
  ));

  renderLoggedIn = () => {
    const { userProfile } = this.props;

    return (
      <UserData>
        <UserName>{userProfile.get('displayName')}</UserName>
        <AvatarImage
          onClick={() => this.toggleUserMenu()}
          src={userProfile.get('photoURL')} alt={userProfile.get('displayName')} />
        <UserMenu menuOpened={this.state.userMenuOpened}>
          <MenuItem>{userProfile.get('email')}</MenuItem>
          <LogoutButton menuOpened={this.state.userMenuOpened}
            onClick={this.props.logout}>Log out</LogoutButton>
        </UserMenu>
      </UserData>
    );
  };

  render() {
    return (
      <div className="home">
        <Helmet title="Homepage" />
        {this.props.isUserLogged ?
          <UserPanel> { this.renderLoggedIn() }</UserPanel> : this.renderLoggedOut()}
        <Sidebar>
          {this.renderRooms()}
          <RoomForm onSubmit={this.props.addRoom} />
        </Sidebar>
      </div>
    );
  }
}
