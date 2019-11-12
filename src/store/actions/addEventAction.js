import * as actionTypes from './types';

export const postData = (event) => ({
  type: actionTypes.POST_EVENT_DATA,
  payload: event
});

export const postEventData = (newEvent, history) => (dispatch) => {
    dispatch(postData(newEvent));
    history.push('/');
};

export default postEventData;