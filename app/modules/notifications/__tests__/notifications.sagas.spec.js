import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';

import mockApi from '../../../utils/mockApi';
import { watchNotifications } from '../notifications.sagas';
import {
  NotificationsActions,
  NotificationsTypes
} from '../notifications.redux';

describe('Notifications: sagas', () => {
  const defaultState = fromJS({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchNotifications);
    return sagaTester;
  };

  it('should implement a test', () => {
    const sagaTester = getSagaTester();

    sagaTester.dispatch(NotificationsActions.noop());

    expect(sagaTester.getCalledActions()).to.deep.equal([NotificationsActions.noop()]);
  });
});
