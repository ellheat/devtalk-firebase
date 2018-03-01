import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import { ChatTypes, ChatActions } from './chat.redux';
import { messagesRef } from '../../services/firebase';

export function* sendChatMessage({ roomId, author, message }) {
  try {
    yield messagesRef.child(roomId).push({ author, message });
  } catch (e) {
    yield reportError(e);
  }
}

export default function* chatSaga() {
  yield takeLatest(ChatTypes.SEND_CHAT_MESSAGE, sendChatMessage);
}
