import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import { auth, googleProvider } from '../../services/firebase';
import { AuthenticationTypes, AuthenticationActions } from './authentication.redux';


export function* signIn() {
  try {
    const data = yield auth.signInWithPopup(googleProvider);

    yield put(AuthenticationActions.signInSuccess(data.additionalUserInfo.profile));
  } catch (e) {
    yield put(AuthenticationActions.signInError(e.response ? e.response.data : e));
    yield reportError(e);
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(AuthenticationActions.logoutSuccess());
  } catch (e) {
    yield reportError(e);
  }
}

export default function* authenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN, signIn);
  yield takeLatest(AuthenticationTypes.LOGOUT, signOut);
}
