import { expect } from 'chai';
import { fromJS } from 'immutable';

import {
  reducer as notificationsReducer,
  NotificationsActions,
  NotificationsTypes,
} from '../notifications.redux';


describe('Notifications: redux', () => {
  const state = fromJS({
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(notificationsReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(notificationsReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });
  });
});
