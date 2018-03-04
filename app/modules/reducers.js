import { combineReducers } from 'redux-immutable';

import { reducer as formReducer } from 'redux-form/immutable';
import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as chatReducer } from './chat/chat.redux';
import { reducer as roomsReducer } from './rooms/rooms.redux';
import { reducer as authenticationReducer } from './authentication/authentication.redux';


export default function createReducer() {
  return combineReducers({
    form: formReducer,
    route: routerReducer,
    chat: chatReducer,
    rooms: roomsReducer,
    authentication: authenticationReducer,
    locales: localesReducer,
  });
}
