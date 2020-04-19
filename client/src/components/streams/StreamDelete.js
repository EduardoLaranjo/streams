import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {deleteStream, fetchStream} from '../../actions';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const {id} = this.props.match.params;
    return (
        <>
          <div className="ui primary button negative"
               onClick={() => this.props.deleteStream(id)}>
            Delete
          </div>
          <Link className="ui primary button" to='/'>
            Cancel
          </Link>
        </>
    );
  };

  render() {

    return (
        <div>
          Stream Delete
          <Modal title={'Delete Stream'}
                 content={'Are you sure you want to delete this stream'}
                 actions={this.renderActions()}
                 onDismiss={() => history.push('/')}/>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(
    StreamDelete);