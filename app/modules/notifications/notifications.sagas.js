import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import { NotificationsTypes, NotificationsActions } from './notifications.redux';


export function* watchNotifications() {
  try {
    console.log('Notifications saga started!');
  } catch(error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
