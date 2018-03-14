import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { Wrapper, RoomTitle } from './chat.styles';
import { Messages } from './messages/messages.component';
import { MessageForm } from './messageForm/messageForm.component';


export class Chat extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    messages: PropTypes.instanceOf(List).isRequired,
    userProfile: PropTypes.object,
    sendChatMessage: PropTypes.func.isRequired,
    requestNotificationsPermission: PropTypes.func.isRequired,
    createChatListener: PropTypes.func.isRequired,
    removeChatListener: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.startRoomListening(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.startRoomListening(nextProps.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.removeChatListener();
  }

  startRoomListening(roomId) {
    this.props.removeChatListener();
    this.props.requestNotificationsPermission();
    this.props.createChatListener(
      roomId,
    );
  }

  submitHandler = (data) => {
    const author = {
      name: this.props.userProfile.get('displayName', ''),
      imageURL: this.props.userProfile.get('photoURL', ''),
    };

    this.props.sendChatMessage(
      this.props.match.params.id,
      author,
      data.get('message'));
  };

  render = () => (
    <Wrapper>
      <RoomTitle>{this.props.match.params.id}</RoomTitle>
      <Messages messages={this.props.messages} />
      <MessageForm onSubmit={this.submitHandler} />
    </Wrapper>
  );
}
