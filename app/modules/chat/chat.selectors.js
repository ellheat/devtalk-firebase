import { createSelector } from 'reselect';


const selectChatDomain = state => state.get('chat');

export const selectMessages = createSelector(
  selectChatDomain, state => state.get('messages')
);
