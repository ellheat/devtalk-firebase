import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as chatReducer } from './chat/chat.redux';
import { reducer as authenticationReducer } from './authentication/authentication.redux';


export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    chat: chatReducer,
    authentication: authenticationReducer,
    locales: localesReducer,
  });
}
