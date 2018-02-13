import { createSelector } from 'reselect';


const selectChatDomain = state => state.get('chat');

export const selectChatItems = createSelector(
  selectChatDomain, state => state.get('items')
);
