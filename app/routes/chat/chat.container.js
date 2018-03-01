import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Chat } from './chat.component';
import { ChatActions } from '../../modules/chat/chat.redux';
import { selectUserProfile } from '../../modules/authentication/authentication.selectors';

const mapStateToProps = createStructuredSelector({
  userProfile: selectUserProfile,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendChatMessage: ChatActions.sendChatMessage,
}, dispatch);

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat)));
