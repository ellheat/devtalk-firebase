import React, { PureComponent } from 'react';
import { Wrapper } from './chat.styles';
import { Messages } from './messages/messages.component';
import { MessageInput } from './messageInput/messageInput.component';


export class Chat extends PureComponent {
  static propTypes = {};

  componentDidMount() {

  }

  render = () => (
    <Wrapper>
      <Messages />
      <MessageInput />
    </Wrapper>
  );
}
