import { all, fork } from 'redux-saga/effects';
import chatSaga from './chat/chat.sagas';
import authenticationSaga from './authentication/authentication.sagas';
import notificationsSaga from './notifications/notifications.sagas';
import roomsSaga from './rooms/rooms.sagas';

export default function* rootSaga() {
  yield all([
    fork(chatSaga),
    fork(authenticationSaga),
    fork(notificationsSaga),
    fork(roomsSaga),
  ]);
}
