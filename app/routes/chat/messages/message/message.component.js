import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Wrapper, Avatar, Meta, Text, Author, Timestamp, Content } from './message.styles';

export class Message extends PureComponent {
  static propTypes = {
    author: PropTypes.object.isRequired,
    timestamp: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    author: {
      name: 'Anonymous',
      imageURL: 'https://avatars.io/static/default_128.jpg',
    },
  };

  renderDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${moment(date).format('HH:mm:ss, DD:MM:YYYY')}`;
  };

  render = () => {
    const { author, timestamp, message } = this.props;
    return (
      <Wrapper>
        <Avatar>
          <img src={author.get('imageURL')} alt={author} />
        </Avatar>
        <Content>
          <Meta>
            <Author>{author.get('name')}</Author>
            <Timestamp>{this.renderDate(timestamp)}</Timestamp>
          </Meta>
          <Text>{message}</Text>
        </Content>
      </Wrapper>
    );
  };
}
