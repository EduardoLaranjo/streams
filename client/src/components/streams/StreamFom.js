import React from 'react';
import {Formik} from 'formik';

class StreamForm extends React.Component {

  defaultValues = {title: '', description: ''};

  render() {
    return (
        <div>
          <Formik initialValues={this.props.initialValues || this.defaultValues}
                  onSubmit={this.props.onSubmit}>

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

export default StreamForm;