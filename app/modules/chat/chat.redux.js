import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: ChatTypes, Creators: ChatActions } = createActions({
  watchChat: ['roomId'],
  sendChatMessage: ['roomId', 'author', 'message'],
  messageReceived: ['messageData'],
}, { prefix: 'CHAT_' });

const ChatRecord = new Record({
  messages: List(),
});

export const INITIAL_STATE = new ChatRecord({});

export const clearMessages = () => INITIAL_STATE;

export const addMessage = (state = INITIAL_STATE, { messageData }) => state
  .update('messages', messages => messages.push(fromJS(messageData)));

export const reducer = createReducer(INITIAL_STATE, {
  [ChatTypes.MESSAGE_RECEIVED]: addMessage,
  [ChatTypes.WATCH_CHAT]: clearMessages,
});
