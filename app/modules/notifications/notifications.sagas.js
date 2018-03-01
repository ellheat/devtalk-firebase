import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';
import { NotificationsTypes, NotificationsActions } from './notifications.redux';

import { messaging } from '../../services/firebase';

export function* requestPermission() {
  try {
    console.log('permissioning');
    yield messaging.requestPermission();
    console.log('permission granted');
    const token = yield messaging.getToken();
    console.log(token);
  } catch (error) {
    if (error.code) {
      yield put(NotificationsActions.requestPermissionFailed(error.code));
    }
    yield reportError(error);
  }
}

export function requestPermissionFailed({ error }) {
  console.log(error);
}

export default function* notificationsSaga() {
  yield takeLatest(NotificationsTypes.REQUEST_PERMISSION, requestPermission);
  yield takeLatest(NotificationsTypes.REQUEST_PERMISSION_FAILED, requestPermissionFailed);
}
