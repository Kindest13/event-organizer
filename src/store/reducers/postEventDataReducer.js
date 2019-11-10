import {
  POST_EVENT_DATA
} from '../actions/types';

const initialState = {
  events: []
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
    default:
      return state;
  }
}