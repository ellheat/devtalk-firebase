import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: ChatTypes, Creators: ChatActions } = createActions({
  sendChatMessage: ['roomId', 'author', 'message'],
}, { prefix: 'CHAT_' });

const ChatRecord = new Record({
});

export const INITIAL_STATE = new ChatRecord({});



export const reducer = createReducer(INITIAL_STATE, {
});
