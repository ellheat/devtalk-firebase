import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { Wrapper } from './chat.styles';
import { Messages } from './messages/messages.component';
import { MessageForm } from './messageForm/messageForm.component';


export class Chat extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    messages: PropTypes.instanceOf(List).isRequired,
    userProfile: PropTypes.object,
    sendChatMessage: PropTypes.func.isRequired,
    requestNotificationsPermission: PropTypes.func.isRequired,
    watchChat: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestNotificationsPermission();
    this.props.watchChat(
      this.props.match.params.id,
    );
  }

  componentWillUnmount() {
    // this.props.stopWatchChat();
  }

  submitHandler = (data) => {
    this.props.sendChatMessage(
      this.props.match.params.id,
      this.props.userProfile.get('displayName'),
      data.get('message'));
  };

  render = () => (
    <Wrapper>
      <Messages messages={this.props.messages} />
      <MessageForm onSubmit={this.submitHandler} />
    </Wrapper>
  );
}
