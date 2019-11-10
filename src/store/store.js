import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postEventDataReducer from './reducers/postEventDataReducer';


const initialState = {};

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const composedEnhancers = composeWithDevTools(...enhancers);
const reducers = combineReducers({
  postEventData: postEventDataReducer
});

const store = createStore(
  reducers,
  initialState,
  composedEnhancers,
);

export default store;
