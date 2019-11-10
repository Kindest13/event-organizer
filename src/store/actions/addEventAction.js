import * as actionTypes from './types';

export const authSuccess = (event) => ({
  type: actionTypes.POST_EVENT_DATA,
  payload: event
});

export const authFail = error => ({
  type: actionTypes.ADD_EVENT_FAIL,
  error,
});

export const postEventData = (newEvent, history) => async (dispatch) => {
    dispatch(authSuccess(newEvent));
    history.push('/');
    console.log("postEventData");
    // dispatch(authFail(error));
    // return error;
};

export default postEventData;