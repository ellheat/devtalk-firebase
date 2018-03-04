import { takeLatest, put, call, take } from 'redux-saga/effects';
import { buffers, eventChannel } from 'redux-saga';
import reportError from 'report-error';
import { reset as resetForm } from 'redux-form/immutable';

import { RoomsTypes, RoomsActions } from './rooms.redux';
import { roomsRef } from '../../services/firebase';

export function* addRoom({ data }) {
  try {
    yield roomsRef.child(data.get('room')).set(true);
    yield put(resetForm('roomForm'));

  } catch (e) {
    yield reportError(e);
  }
}


export function createEventChannel() {
  const listener = eventChannel(emit => {
    roomsRef.on('child_added', snap => {
      emit({
        key: snap.key,
        value: snap.val(),
      });
    });
    return () => {
      roomsRef.off();
    };
  }, buffers.expanding(1));
  return listener;
}

export function* createRoomsListener() {
  const channel = yield call(createEventChannel);
  try {
    while (true) {
      const data = yield take(channel);
      yield put(RoomsActions.showRooms(data.key));
    }
  } catch (e) {
    yield reportError(e);
  }
}

export function* removeRoomsListener() {
  const channel = yield call(createEventChannel);
  try {
    channel.close();
  } catch (e) {
    yield reportError(e);
  }
}

export default function* roomsSaga() {
  yield takeLatest(RoomsTypes.ADD_ROOM, addRoom);
  yield takeLatest(RoomsTypes.CREATE_ROOMS_LISTENER, createRoomsListener);
  yield takeLatest(RoomsTypes.REMOVE_ROOMS_LISTENER, removeRoomsListener);
}
