import { createSelector } from 'reselect';


const selectRoomsDomain = state => state.get('rooms');

export const selectRooms = createSelector(
  selectRoomsDomain, state => state.get('data')
);
