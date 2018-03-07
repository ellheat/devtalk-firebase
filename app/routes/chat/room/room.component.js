import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { Wrapper } from '../chat.styles';
import { Messages } from '../messages/messages.component';
import { MessageForm } from '../messageForm/messageForm.component';


export class Room extends PureComponent {
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
    this.props.requestNotificationsPermission();
    this.props.createChatListener(
      this.props.match.params.id,
    );
  }

  componentWillUnmount() {
    this.props.removeChatListener();
  }

  submitHandler = (data) => {
    this.props.sendChatMessage(
      this.props.match.params.id,
      this.props.userProfile.get('displayName'),
      data.get('message'));
  };

  render = () => {
    return (
      <Wrapper>
        <h1>{this.props.match.params.id}</h1>
        <br />
        <Messages messages={this.props.messages} />
        <MessageForm onSubmit={this.submitHandler} />
      </Wrapper>
    );
  };
}
