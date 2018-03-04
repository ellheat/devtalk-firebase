import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Message } from './message/message.component';
import { Wrapper } from './messages.styles';

const timestamp = new Date();

export class Messages extends PureComponent {
  static propTypes = {};

  render = () => (
    <Wrapper>
      <Message author="Marcin Bazanowski" timestamp={timestamp} message="Test message" />
      <Message author="Marcin Bazanowski" timestamp={timestamp} message="Testy message other" />
      <Message author="Rafał Gruszecki" timestamp={timestamp} message="Test message" />
      <Message author="Rafał Gruszecki" timestamp={timestamp} message="Test message" />
    </Wrapper>
  );
}
