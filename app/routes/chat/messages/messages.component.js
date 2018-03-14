import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { Message } from './message/message.component';
import { Wrapper } from './messages.styles';
export class Messages extends PureComponent {
  static propTypes = {
    messages: PropTypes.instanceOf(List).isRequired,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.messages.size !== this.props.messages.size) {
      this.scrollToEnd();
    }
  }

  scrollToEnd = () => {
    const fullHeight = Array.from(this.wrapper.children).reduce((sum, elem) => sum + elem.clientHeight, 0);
    this.wrapper.scrollTop = fullHeight + this.wrapper.clientHeight;
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
    <Wrapper innerRef={(comp) => (this.wrapper = comp)}>
      {this.props.messages.map(this.renderMessage).toArray()}
    </Wrapper>
  );
}
