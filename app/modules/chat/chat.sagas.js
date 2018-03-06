import { put, takeLatest, call, take, fork } from 'redux-saga/effects';
import { buffers, eventChannel } from 'redux-saga';
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


function createEventChannel(roomId) {
  const chatRef = messagesRef.child(roomId);
  return eventChannel(emit => {
    chatRef.on('child_added', snap => {
      emit({
        key: snap.key,
        value: snap.val(),
      });
    });
    return () => {
      chatRef.off();
    };
  }, buffers.expanding(1));
}

function* removeChatListener(channel) {
  yield take(ChatTypes.REMOVE_CHAT_LISTENER);
  channel.close();
}

export function* createChatListener({ roomId }) {
  try {
    const channel = yield call(createEventChannel, roomId);

    yield fork(removeChatListener, channel);

    while (true) {
      const { key, value } = yield take(channel);
      yield put(ChatActions.messageReceived({
        key,
        message: value.message,
        timestamp: value.timestamp,
        author: value.author,
      }));
    }
  } catch (e) {
    yield reportError(e);
  }
}

export default function* chatSaga() {
  yield takeLatest(ChatTypes.SEND_CHAT_MESSAGE, sendChatMessage);
  yield takeLatest(ChatTypes.CREATE_CHAT_LISTENER, createChatListener);
  yield takeLatest(ChatTypes.REMOVE_CHAT_LISTENER, removeChatListener);
}
