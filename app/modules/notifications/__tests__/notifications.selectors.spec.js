import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectNotificationsDomain } from '../notifications.selectors';

describe('Notifications: selectors', () => {
  const state = fromJS({
    notifications: {

    },
  });

  describe('selectNotificationsDomain', () => {
    it('should select a domain', () => {
      expect(selectNotificationsDomain(state)).to.equal(state.get('notifications'));
    });
  });
});
