import {
  POST_EVENT_DATA,
  GET_EVENT_DATA
} from '../actions/types';

const initialState = {
  events: [],
  isLoaded: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_EVENT_DATA: {
      const newEvent = action.payload;
      return {
        ...state,
        events: [...state.events, newEvent]
      };
    }
    case GET_EVENT_DATA: {
      const events = action.payload;
      return {
        ...state,
        ...events,
        isLoaded: true
      };
    }
    default:
      return state;
  }
}