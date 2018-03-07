import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Avatar, Meta, Text, Author, Timestamp, Content } from './message.styles';

export class Message extends PureComponent {
  static propTypes = {
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    author: 'Anonymous',
    avatar: 'https://avatars.io/static/default_128.jpg',
  };

  renderDate = (timestamp) => {
    // format H:i d.m.Y
    const d = new Date(timestamp * 1000);
    return `${d.getHours()}:${d.getMinutes()} ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  };

  render = () => {
    const { author, avatar, timestamp, message } = this.props;
    return (
      <Wrapper>
        <Avatar>
          <img src={avatar} alt={author} />
        </Avatar>
        <Content>
          <Meta>
            <Author>{author}</Author>
            <Timestamp>{this.renderDate(timestamp)}</Timestamp>
          </Meta>
          <Text>{message}</Text>
        </Content>
      </Wrapper>
    );
  };
}
