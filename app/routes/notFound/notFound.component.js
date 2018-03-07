import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { Container } from './notFound.styles';

export class NotFound extends Component {
  render() {
    return (
      <Container>
        <Helmet
          title="Not Found"
        />

        <h1>404</h1>
      </Container>
    );
  }
}
