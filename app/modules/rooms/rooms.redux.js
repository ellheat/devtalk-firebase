import { createActions, createReducer } from 'reduxsauce';
import { Record, List } from 'immutable';

export const { Types: RoomsTypes, Creators: RoomsActions } = createActions({
  addRoom: ['data'],
  createRoomsListener: [''],
  removeRoomsListener: [''],
  showRooms: ['key'],
}, { prefix: 'ROOMS_' });

const RoomsRecord = new Record({
  isFetching: false,
  data: List(),
});

export const INITIAL_STATE = new RoomsRecord({});

const showRooms = (state = INITIAL_STATE, { key }) => state
  .update('data', data => data.push(key));

const removeRoomsListener = (state = INITIAL_STATE) => state
  .set('data', List());

export const reducer = createReducer(INITIAL_STATE, {
  [RoomsTypes.SHOW_ROOMS]: showRooms,
  [RoomsTypes.REMOVE_ROOMS_LISTENER]: removeRoomsListener,
});
