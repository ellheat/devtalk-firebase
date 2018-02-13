import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import api from '../../services/api';
import { auth, googleProvider } from '../../services/firebase';
import { AuthenticationTypes, AuthenticationActions } from './authentication.redux';

export function* signIn() {
  try {

    yield auth.signInWithPopup(googleProvider).then((result) => {
      console.log('result', result);

      put(AuthenticationActions.signInSuccess(result.user));
    }).catch((error) => {
      console.log(error);
    });
  } catch (e) {
    yield put(AuthenticationActions.signInError(e.response ? e.response.data : e));
    yield reportError(e);
  }
}

export default function* authenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN, signIn);
}
