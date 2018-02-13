import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Home } from './home.component';
import { LocalesActions } from '../../modules/locales/locales.redux';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';
import { AuthenticationActions } from '../../modules/authentication/authentication.redux';
import { selectIsUserLogged, selectUserProfile } from '../../modules/authentication/authentication.selectors';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  isUserLogged: selectIsUserLogged,
  userProfile: selectUserProfile,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setLanguage: LocalesActions.setLanguage,
  signIn: AuthenticationActions.signIn,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
