import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: ChatTypes, Creators: ChatActions } = createActions({
  fetch: ['language'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'CHAT_' });

const ChatRecord = new Record({
  items: List(),
});

export const INITIAL_STATE = new ChatRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('items', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [ChatTypes.FETCH_SUCCESS]: getSuccessHandler,
});
