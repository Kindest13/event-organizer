import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import eventDataReducer from './reducers/eventDataReducer';


const initialState = {};

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const composedEnhancers = composeWithDevTools(...enhancers);
const reducers = combineReducers({
  eventData: eventDataReducer
});

const store = createStore(
  reducers,
  initialState,
  composedEnhancers,
);

export default store;
