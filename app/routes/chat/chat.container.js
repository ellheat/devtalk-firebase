import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Chat } from './chat.component';
import { RoomsActions } from '../../modules/rooms/rooms.redux';
import { selectRooms } from '../../modules/rooms/rooms.selectors';

const mapStateToProps = createStructuredSelector({
  rooms: selectRooms,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  addRoom: RoomsActions.addRoom,
  createRoomsListener: RoomsActions.createRoomsListener,
  removeRoomsListener: RoomsActions.removeRoomsListener,
}, dispatch);

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat)));
