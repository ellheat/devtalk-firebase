import { all, fork } from 'redux-saga/effects';
import chatSaga from './chat/chat.sagas';
import authenticationSaga from './authentication/authentication.sagas';

export default function* rootSaga() {
  yield all([
    fork(chatSaga),
    fork(authenticationSaga),
  ]);
}
