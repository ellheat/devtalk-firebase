import { createActions, createReducer } from 'reduxsauce';
import { Record } from 'immutable';

export const { Types: NotificationsTypes, Creators: NotificationsActions } = createActions({
  requestPermission: [],
  requestPermissionFailed: ['error'],
}, { prefix: 'NOTIFICATIONS_' });

const NotificationsRecord = new Record({
});

export const INITIAL_STATE = new NotificationsRecord({});

export const reducer = createReducer(INITIAL_STATE, {
});
