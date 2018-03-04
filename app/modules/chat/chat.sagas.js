import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';
import { reset as resetForm } from 'redux-form/immutable';

import { ChatTypes, ChatActions } from './chat.redux';
import { messagesRef, roomsRef, timestamp } from '../../services/firebase';

export function* sendChatMessage({ roomId, author, message }) {
  try {
    yield roomsRef.child(roomId).set(true);
    yield messagesRef.child(roomId).push({ author, message, timestamp });
    yield put(resetForm('messageForm'));
  } catch (e) {
    yield reportError(e);
  }
}

export default function* chatSaga() {
  yield takeLatest(ChatTypes.SEND_CHAT_MESSAGE, sendChatMessage);
}
