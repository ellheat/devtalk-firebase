import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import validate from 'validate.js/validate';
import { Field, reduxForm } from 'redux-form/immutable';

import messages from './messageForm.messages';
import { Input, SendButton, Form } from './messageForm.styles';


class MessageFormComponent extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.bool,
    valid: PropTypes.bool.isRequired,
    intl: PropTypes.object.isRequired,
  };

  renderField = ({ error, input, placeholder, type, meta: { dirty, active, invalid } }) => (
    <Input
      {...input}
      placeholder={placeholder}
      type={type}
      errorStyle={!!error || (dirty && !active && invalid)}
    />
  );

  render() {
    const { intl: { formatMessage }, handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit} noValidate>
        <Field
          name="message"
          type="text"
          component={this.renderField}
          placeholder={formatMessage(messages.placeholder)}
        />
        <SendButton>
          <FormattedMessage {...messages.send} />
        </SendButton>
      </Form>
    );
  }
}

export const MessageForm = injectIntl(reduxForm({
  form: 'messageForm',
  validate: (values) => validate(values.toJS(), {
    room: {
      presence: {
        allowEmpty: false,
      },
    },
  }),
})(MessageFormComponent));
