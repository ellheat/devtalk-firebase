import { takeLatest, put } from 'redux-saga/effects';
import reportError from 'report-error';
import { reset as resetForm } from 'redux-form/immutable';

import { RoomsTypes } from './rooms.redux';
import { roomsRef } from '../../services/firebase';

export function* addRoom({ data }) {
  try {
    yield roomsRef.child(data.get('room')).set(true);
    yield put(resetForm('roomForm'));

  } catch (e) {
    yield reportError(e);
  }
}

export default function* roomsSaga() {
  yield takeLatest(RoomsTypes.ADD_ROOM, addRoom);
}
