import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import { ChatTypes, ChatActions } from './chat.redux';

export function* fetchChat() {
  try {
    yield put(ChatActions.fetchSuccess(data));
  } catch (e) {
    yield put(ChatActions.fetchError(e.response ? e.response.data : e));
    yield reportError(e);
  }
}

export default function* maintainersSaga() {
  yield takeLatest(ChatTypes.FETCH, fetchChat);
}
