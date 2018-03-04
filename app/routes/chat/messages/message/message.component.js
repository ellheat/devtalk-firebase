import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Avatar, Meta, Text, Author, Timestamp, Content } from './message.styles';

export class Message extends PureComponent {
  static propTypes = {
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    author: 'Anonymous',
    avatar: 'https://avatars.io/static/default_128.jpg',
  };

  renderDate = (d) => {
    // format H:i d.m.Y
    console.log(d);
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
