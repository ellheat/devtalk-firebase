import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import messages from './messageInput.messages';
import { Form, Text, SendButton } from './messageInput.styles';


class MessageInputComponent extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  state = {
    input: '',
  };

  clearInput() {
    this.setState({ input: '' });
  }

  inputChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    // here will be action to send message

    this.clearInput();
  };

  render() {
    const { intl } = this.props;
    const { input } = this.state;

    return (
      <Form onSubmit={this.submitHandler}>
        <Text
          type="text"
          onChange={this.inputChangeHandler}
          value={input}
          placeholder={intl.formatMessage({ ...messages.placeholder })}
          required
        />
        <SendButton>
          <FormattedMessage {...messages.send} />
        </SendButton>
      </Form>
    );
  }
}

export const MessageInput = injectIntl(MessageInputComponent);
