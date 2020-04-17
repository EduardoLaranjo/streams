import {CREATE_STREAM, FETCH_STREAM} from '../actions/types';

const initState = {};

const streamReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};

    default:
      return state;
  }
};

export default streamReducer;