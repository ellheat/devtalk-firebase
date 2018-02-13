import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS, Map } from 'immutable';

export const { Types: AuthenticationTypes, Creators: AuthenticationActions } = createActions({
  signIn: null,
  signInSuccess: ['data'],
  signInError: ['payload'],
}, { prefix: 'MAINTAINERS_' });

const AuthenticationRecord = new Record({
  user: Map(),
});

export const INITIAL_STATE = new AuthenticationRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('user', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [AuthenticationTypes.SIGN_IN_SUCCESS]: getSuccessHandler,
});
