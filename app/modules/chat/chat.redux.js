import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';
import { createChatListener } from './chat.sagas';
import { RoomsTypes } from '../rooms/rooms.redux';

export const { Types: ChatTypes, Creators: ChatActions } = createActions({
  createChatListener: ['roomId'],
  removeChatListener: [''],
  sendChatMessage: ['roomId', 'author', 'message'],
  messageReceived: ['messageData'],
}, { prefix: 'CHAT_' });

const ChatRecord = new Record({
  messages: List(),
});

export const INITIAL_STATE = new ChatRecord({});

const removeChatListener = () => INITIAL_STATE;

export const addMessage = (state = INITIAL_STATE, { messageData }) => state
  .update('messages', messages => messages.push(fromJS(messageData)));

export const reducer = createReducer(INITIAL_STATE, {
  [ChatTypes.MESSAGE_RECEIVED]: addMessage,
  [ChatTypes.REMOVE_CHAT_LISTENER]: removeChatListener,
});
