import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {editStream, fetchStream} from '../../actions';
import StreamForm from './StreamFom';

class StreamShow extends React.Component {

  onFormSubmit = (formValue) => this.props.editStream(
      this.props.match.params.id, formValue);

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
        <div>
          <h2>Edit Stream</h2>
          <StreamForm
              initialValues={_.pick(this.props.stream, 'title', 'description')}
              onSubmit={this.onFormSubmit}/>
        </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamShow);