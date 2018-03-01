import { createSelector } from 'reselect';

export const selectNotificationsDomain = state => state.get('notifications');
