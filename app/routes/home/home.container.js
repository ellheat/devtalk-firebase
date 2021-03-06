import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Home } from './home.component';
import { LocalesActions } from '../../modules/locales/locales.redux';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';
import { AuthenticationActions } from '../../modules/authentication/authentication.redux';
import { selectIsUserLogged, selectUserProfile } from '../../modules/authentication/authentication.selectors';
import { RoomsActions } from '../../modules/rooms/rooms.redux';
import { selectRooms } from '../../modules/rooms/rooms.selectors';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  isUserLogged: selectIsUserLogged,
  userProfile: selectUserProfile,
  rooms: selectRooms,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setLanguage: LocalesActions.setLanguage,
  signIn: AuthenticationActions.signIn,
  logout: AuthenticationActions.logout,
  addRoom: RoomsActions.addRoom,
  createRoomsListener: RoomsActions.createRoomsListener,
  removeRoomsListener: RoomsActions.removeRoomsListener,
}, dispatch);

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Home)));
