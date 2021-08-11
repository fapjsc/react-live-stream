import { CREATE_STREAM, FETCH_STREAM_LIST, FETCH_STREAM_SINGLE, UPDATE_STREAM, DELETE_STREAM } from '../actions/types';

const INITIAL_STATE = {};

const streamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STREAM_LIST:
      const newObj = {};
      action.payload.forEach(stream => {
        newObj[stream.id] = stream;
      });
      return {
        ...state,
        ...newObj,
      };

    case FETCH_STREAM_SINGLE:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default streamReducer;
