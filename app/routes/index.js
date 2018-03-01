import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DEFAULT_LOCALE } from '../modules/locales/locales.redux';
import { StartupActions } from '../modules/startup/startup.redux';

import App from './app.container';
import Chat from './chat';
import Home from './home';
import NotFound from './notFound';

export class RootContainer extends Component {
  static propTypes = {
    startup: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to={DEFAULT_LOCALE} />} />


        <Route exact path="/404" component={NotFound} />

        <Route path="/:lang">
          <App>
            <Switch>
              <Route exact path="/:lang" component={Home} />

              <Route exact path="/:lang/chat/:id" component={Chat} />

              <Route component={NotFound} />
            </Switch>
          </App>
        </Route>
      </Switch>
    );
  }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  startup: StartupActions.startup,
}, dispatch);


export default withRouter(connect(null, mapDispatchToProps)(RootContainer));
