import * as actionTypes from './types';

export const postData = (event) => ({
  type: actionTypes.POST_EVENT_DATA,
  payload: event
});

export const postEventData = (newEvent, history) => async (dispatch) => {
  // Maybe need to create server api to write in json
    // events.push()
    dispatch(postData(newEvent));
    history.push('/');
    console.log("postEventData");
    // console.log(events);
};

export default postEventData;