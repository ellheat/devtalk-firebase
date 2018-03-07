import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RoomForm } from '../roomForm/roomForm.component';

import { Link } from './roomList.styles';

export class RoomList extends Component {
  static propTypes = {
    rooms: PropTypes.object,
    addRoom: PropTypes.func.isRequired,
  };

  renderRooms = () => this.props.rooms.map((data, index) => (
    <Link key={index} to={`/en/chat/${data}`}>
      <button>Chat {data}</button>
    </Link>
  ));

  render = () => (
    <div>
      {this.renderRooms()}
      <RoomForm onSubmit={this.props.addRoom} />
    </div>
  );
}
