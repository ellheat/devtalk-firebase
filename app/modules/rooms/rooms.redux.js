import { createActions, createReducer } from 'reduxsauce';
import { Record } from 'immutable';

export const { Types: RoomsTypes, Creators: RoomsActions } = createActions({
  addRoom: ['data'],
}, { prefix: 'ROOMS_' });

const RoomsRecord = new Record({
  isFetching: false,
});

export const INITIAL_STATE = new RoomsRecord({});


export const reducer = createReducer(INITIAL_STATE, {});
