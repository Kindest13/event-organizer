import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import Main from './containers/main/main';
import EventCreator from './containers/eventCreator/eventCreator';
import './app.css';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/addEvent" component={EventCreator} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default app;
