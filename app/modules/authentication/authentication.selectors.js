import { createSelector } from 'reselect';


const selectAuthenticationDomain = state => state.get('authentication');

export const selectIsUserLogged = createSelector(
  selectAuthenticationDomain, state => state.get('user').size === 0
);

export const selectUserProfile = createSelector(
  selectAuthenticationDomain, state => state.get('user')
);
