import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './chat.styles';
import { Messages } from './messages/messages.component';
import { MessageForm } from './messageForm/messageForm.component';


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

  submitHandler = (data) => {
    this.props.sendChatMessage(
      this.props.match.params.id,
      this.props.userProfile.get('displayName'),
      data.get('message'));
  };

  render = () => (
    <Wrapper>
      <Messages />
      <MessageForm onSubmit={this.submitHandler} />
    </Wrapper>
  );
}
