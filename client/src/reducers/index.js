import {combineReducers} from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamsReducer';

export default combineReducers({auth: authReducer, streams: streamReducer});