import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { RoomForm } from './roomForm/roomForm.component';
import Chat from '../chat/chat.container';

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
  LoginView,
  HomeComponent,
  ChatContainer,
  ScreenContainer,
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
    <LoginView>
      <UserActionButton onClick={this.props.signIn}>Log in with Google</UserActionButton>
    </LoginView>
  );

  renderRooms = () => this.props.rooms.map((data, index) => (
    <Link key={index} to={`/en/chat/${data}`}>
      <RoomButton>{`${data} chat`}</RoomButton>
    </Link>
  ));

  renderAppbar = () => {
    const { userProfile } = this.props;

    return (
      <UserPanel>
        <UserData>
          <UserName>{userProfile.get('displayName')}</UserName>
          <AvatarImage
            onClick={() => this.toggleUserMenu()}
            src={userProfile.get('photoURL')}
            alt={userProfile.get('displayName')}
          />
          <UserMenu menuOpened={this.state.userMenuOpened}>
            <MenuItem>{userProfile.get('email')}</MenuItem>
            <LogoutButton menuOpened={this.state.userMenuOpened} onClick={this.props.logout}>Log out</LogoutButton>
          </UserMenu>
        </UserData>
      </UserPanel>
    );
  };

  renderEmptyState = () => (
    <div>Select a room</div>
  );

  renderLoggedIn = () => (
    <ScreenContainer>
      { this.renderAppbar() }
      <ChatContainer>
        <Sidebar>
          {this.renderRooms()}
          <RoomForm onSubmit={this.props.addRoom} />
        </Sidebar>
        <Switch>
          <Route exact path="/en/chat/:id" component={Chat} />
          <Route render={this.renderEmptyState} />
        </Switch>
      </ChatContainer>
    </ScreenContainer>
  );

  render() {
    return (
      <HomeComponent>
        <Helmet title="Homepage" />
        {this.props.isUserLogged ? this.renderLoggedIn() : this.renderLoggedOut()}
      </HomeComponent>
    );
  }
}
