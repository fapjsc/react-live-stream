import history from '../history';
// Api
import streams from '../apis/streams';

import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM_LIST, FETCH_STREAM_SINGLE, UPDATE_STREAM, DELETE_STREAM } from './types';

export const trySignIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const trySignOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });

  history.push('/');
};

export const fetchStreamList = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAM_LIST, payload: response.data });
};

export const fetchStreamSingle = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM_SINGLE, payload: response.data });
};

export const updateStream = id => async dispatch => {
  const response = await streams.put(`/streams/${id}`);
  dispatch({ type: UPDATE_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
