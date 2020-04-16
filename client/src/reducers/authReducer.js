import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INIT_STATE = {
  isSignIn: null
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, isSignIn: true, userId: action.payload};
    case SIGN_OUT:
      return {...state, isSignIn: false, userId: undefined};
    default:
      return state;
  }
};

export default authReducer;