import { all, fork } from 'redux-saga/effects';
import maintainersSaga from './maintainers/maintainers.sagas';
import authenticationSaga from './authentication/authentication.sagas';

export default function* rootSaga() {
  yield all([
    fork(maintainersSaga),
    fork(authenticationSaga),
  ]);
}
