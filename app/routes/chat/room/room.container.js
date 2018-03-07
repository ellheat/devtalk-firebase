import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Room } from './room.component';
import { ChatActions } from '../../../modules/chat/chat.redux';
import { selectMessages } from '../../../modules/chat/chat.selectors';
import { selectUserProfile } from '../../../modules/authentication/authentication.selectors';
import { NotificationsActions } from '../../../modules/notifications/notifications.redux';

const mapStateToProps = createStructuredSelector({
  userProfile: selectUserProfile,
  messages: selectMessages,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendChatMessage: ChatActions.sendChatMessage,
  requestNotificationsPermission: NotificationsActions.requestPermission,
  createChatListener: ChatActions.createChatListener,
  removeChatListener: ChatActions.removeChatListener,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Room);
