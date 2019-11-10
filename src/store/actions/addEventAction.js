import * as actionTypes from './types';
import { events } from '../../helpers/events';

export const postData = (event) => ({
  type: actionTypes.POST_EVENT_DATA,
  payload: event
});

export const getData = (events) => ({
  type: actionTypes.GET_EVENT_DATA,
  payload: events
});

export const getEventsData = (events) => async (dispatch) => {
  // Maybe need to create server api to get from json
  dispatch(getData(events));
  console.log("getEventData");
};

export const postEventData = (newEvent, history) => async (dispatch) => {
  // Maybe need to create server api to write in json
    // events.push()
    dispatch(postData(newEvent));
    history.push('/');
    console.log("postEventData");
    // console.log(events);
};

export default postEventData;