import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends Component {
  // state = {isSignIn: null};

  componentDidMount() {
    const CLIENT_ID = '188703480414-jqgae3ikqcffdfebbvt51i2588e5129u.apps.googleusercontent.com';

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({clientId: CLIENT_ID, scope: 'email'})
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  renderAuthButton() {
    if (this.props.isSignIn) {
      return (
          <button className="ui red google button"
                  onClick={this.onSignOutClick}>
            <i className='google icon'/>
            Sign out
          </button>
      );
    } else {
      return (
          <button className="ui red google button"
                  onClick={this.onSignInClick}>
            <i className='google icon'/>
            Sign in with Google
          </button>
      );
    }
  }

  onSignInClick = () => {
    this.auth.signIn().then((response) => {
      this.props.signIn(response.Ca);
    });
  };

  onSignOutClick = () => {
    this.auth.signOut().then(() => this.props.signOut());
  };

  onAuthChange = isSignIn => {
    if (isSignIn) {
      this.props.signIn(this.auth.currentUser.je.Ca);
    } else {
      this.props.signOut();
    }
  };

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => {
  return {isSignIn: state.auth.isSignIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);