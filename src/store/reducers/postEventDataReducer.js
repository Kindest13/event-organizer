import {
  POST_EVENT_DATA,
  ADD_EVENT_FAIL
} from '../actions/types';

const initialState = {
  events: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT_FAIL:
      const error = action.payload.error;
      return {
        ...state,
        error
      };
    case POST_EVENT_DATA: {
      const newEvent = action.payload;
      return {
        ...state,
        events: [...state.events, newEvent]
      };
    }
    default:
      return state;
  }
}