import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
          <div className="item" key={stream.id}>
            {this.renderAdmin(stream.userId)}
            <i className="large middle aligned icon camera"/>
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
      );
    });
  }

  renderAdmin(userId) {
    if (this.props.currentUserId === userId) {
      return (
          <div className="right floated content">
            <button className="ui button primary">Edit</button>
            <button className="ui button negative">Delete</button>
          </div>
      );
    }
  }

  render() {
    return (
        <div>
          <h2>Streams</h2>
          <div className="ui celled list">
            {this.renderList()}
          </div>
          {this.renderCreate()}
        </div>
    );
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
          <div style={{textAlign: 'right'}}>
            <Link className="ui button primary" to="/streams/new">
              Create Stream
            </Link>
          </div>
      );
    }
  }
}

const mapStateToProps = (store) => {
  return {
    streams: Object.values(store.streams),
    currentUserId: store.auth.userId,
    isSignedIn: store.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);