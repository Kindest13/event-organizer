import * as actionTypes from './types';

export const getData = (events) => ({
  type: actionTypes.GET_EVENT_DATA,
  payload: events
});

export const getEventsData = (events) => async (dispatch) => {
  console.log("getEventData", events);
  dispatch(getData(events));
};