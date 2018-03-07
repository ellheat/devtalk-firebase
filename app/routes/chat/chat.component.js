import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { Wrapper } from './chat.styles';
import Room from './room';
import { RoomList } from './roomList/roomList.component';


export class Chat extends PureComponent {
  static propTypes = {
    createRoomsListener: PropTypes.func.isRequired,
    removeRoomsListener: PropTypes.func.isRequired,
    addRoom: PropTypes.func.isRequired,
    rooms: PropTypes.object,
  };

  componentDidMount() {
    this.props.createRoomsListener();
  }

  componentWillUnmount() {
    this.props.removeRoomsListener();
  }

  render = () => (
    <Wrapper>
      <RoomList
        addRoom={this.props.addRoom}
        rooms={this.props.rooms}
      />
      <Switch>
        <Route exact path="/:lang/chat/:id" component={Room} />
      </Switch>
    </Wrapper>
  );
}
