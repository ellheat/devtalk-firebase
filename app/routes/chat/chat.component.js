import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './chat.styles';
import { Messages } from './messages/messages.component';
import { MessageInput } from './messageInput/messageInput.component';

export class Chat extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    userProfile: PropTypes.object,
    sendChatMessage: PropTypes.func.isRequired,
    requestNotificationsPermission: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log('chat');
    this.props.requestNotificationsPermission();
  }

  render = () => (
    <Wrapper>
      <Messages />
      <MessageInput
        send={this.props.sendChatMessage}
        author={this.props.userProfile.get('displayName')}
        match={this.props.match}
      />
    </Wrapper>
  );
}
