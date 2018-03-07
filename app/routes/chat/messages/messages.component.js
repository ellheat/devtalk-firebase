import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { Message } from './message/message.component';
import { Wrapper } from './messages.styles';
export class Messages extends PureComponent {
  static propTypes = {
    messages: PropTypes.instanceOf(List).isRequired,
  };

  renderMessage = (message) => (
    <Message
      key={message.get('key')}
      author={message.get('author')}
      message={message.get('message')}
      timestamp={message.get('timestamp')}
    />
  );
  render = () => (
    <Wrapper>
      {this.props.messages.map(this.renderMessage).toArray()}
    </Wrapper>
  );
}
