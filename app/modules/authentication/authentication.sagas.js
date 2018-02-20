import { put, takeLatest, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import reportError from 'report-error';
import { pick } from 'ramda';

import { auth, googleProvider } from '../../services/firebase';
import { AuthenticationTypes, AuthenticationActions } from './authentication.redux';
import { StartupTypes } from '../startup/startup.redux';

export const authListener = () => eventChannel(emit => {
  auth.onAuthStateChanged(user => {
    if (user) {
      emit(user);
    } else {
      emit(false);
    }
  });

  return () => {};
});

export function* listenAuthState() {
  const authChannel = yield call(authListener);
  try {
    while (true) {
      const user = yield take(authChannel);
      if (user) {
        const userData = pick(['displayName', 'email', 'photoURL'], user);

        yield put(AuthenticationActions.signInSuccess(userData));
      } else {
        yield put(AuthenticationActions.logoutSuccess());
      }
    }
  } catch (e) {
    yield reportError(e);
  }
}

export function* signIn() {
  try {
    yield auth.signInWithPopup(googleProvider);
  } catch (e) {
    yield reportError(e);
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
  } catch (e) {
    yield reportError(e);
  }
}

export default function* authenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN, signIn);
  yield takeLatest(AuthenticationTypes.LOGOUT, signOut);
  yield takeLatest(StartupTypes.STARTUP, listenAuthState);
}
