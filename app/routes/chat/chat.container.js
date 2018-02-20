import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Chat } from './chat.component';


const mapStateToProps = createStructuredSelector({
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat)));
