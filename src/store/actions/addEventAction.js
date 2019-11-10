import * as actionTypes from './types';

export const authSuccess = (event) => ({
  type: actionTypes.POST_EVENT_DATA,
  payload: event
});

export const postEventData = (newEvent, history) => async (dispatch) => {
    dispatch(authSuccess(newEvent));
    history.push('/');
    console.log("postEventData");
};

export default postEventData;