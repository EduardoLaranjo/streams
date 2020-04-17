import React from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {

  onFormSubmit = (values) => this.props.createStream(values);

  render() {
    return (
        <div>
          <Formik initialValues={{title: '', description: ''}}
                  onSubmit={this.onFormSubmit}>
            {(props) => (
                <form className="ui form" onSubmit={props.handleSubmit}>

                  <div className="field">
                    <label htmlFor="title">Title</label>
                    <input name="title"
                           onChange={props.handleChange}
                           onBlur={props.handleBlur}
                           value={props.values.title}/>
                  </div>

                  <div className="field">
                    <label htmlFor="description">Description</label>
                    <input name="description"
                           onChange={props.handleChange}
                           onBlur={props.handleBlur}
                           value={props.values.description}/>
                  </div>

                  <button className="ui button primary" type="submit">
                    Submit
                  </button>

                </form>
            )}
          </Formik>
        </div>
    );

  }
}

export default connect(null, {createStream})(StreamCreate);