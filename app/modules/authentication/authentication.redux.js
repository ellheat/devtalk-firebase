import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS, Map } from 'immutable';

export const { Types: AuthenticationTypes, Creators: AuthenticationActions } = createActions({
  signIn: null,
  signInSuccess: ['data'],
  signInError: ['payload'],
  logout: null,
  logoutSuccess: null,
}, { prefix: 'AUTH_' });

const AuthenticationRecord = new Record({
  user: Map(),
});

export const INITIAL_STATE = new AuthenticationRecord({});

const setUserProfile = (state = INITIAL_STATE, action) => state.set('user', fromJS(action.data));

const resetProfile = (state) => state.set('user', Map());

export const reducer = createReducer(INITIAL_STATE, {
  [AuthenticationTypes.SIGN_IN_SUCCESS]: setUserProfile,
  [AuthenticationTypes.LOGOUT_SUCCESS]: resetProfile,
});
