import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamFom';

class StreamCreate extends React.Component {

  onFormSubmit = (formValues) => this.props.createStream(formValues);

  render() {
    return <StreamForm onSubmit={this.onFormSubmit}/>;
  }

}

export default connect(null, {createStream})(StreamCreate);