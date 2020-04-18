import history from '../history';
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT
} from './types';
import streams from '../apis/streams';

export const signIn = (userId) => {
  return {type: SIGN_IN, payload: userId};
};

export const signOut = () => {
  return {type: SIGN_OUT};
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});
  history.push('/');
  return dispatch({type: CREATE_STREAM, payload: response.data});
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`, id);
  return dispatch({type: FETCH_STREAM, payload: response.data});
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  return dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const editStream = (stream, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${stream.id}`, formValues);
  return dispatch({type: EDIT_STREAM, payload: response.data});
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await streams.post(`/streams/${id}`);
  return dispatch({type: DELETE_STREAM, payload: response.id});
};
