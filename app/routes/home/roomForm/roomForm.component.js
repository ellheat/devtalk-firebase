import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import validate from 'validate.js';

import messages from './roomForm.messages';

import {
  Input,
  Form,
} from './roomForm.styles';

export class RoomFormComponent extends PureComponent {
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
          name="room"
          type="text"
          component={this.renderField}
          placeholder={formatMessage(messages.name)}
        />
      </Form>
    );
  }
}

export const RoomForm = injectIntl(reduxForm({
  form: 'roomForm',
  validate: (values) => validate(values.toJS(), {
    room: {
      presence: {
        allowEmpty: false,
      },
    },
  }),
})(RoomFormComponent));
