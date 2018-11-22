import React from 'react';
import { render } from 'react-dom';
import Index from '../pages/containers/index';
import data from '../api.json';
import List from '../pages/containers/list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/login';


const initialState = {
  List: data.TodoList,
  Users: data.Users,
  login: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const homeContainer = document.getElementById('home-container');

function handleChange(){
  if (store.getState().login.length > 0) {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    , homeContainer);
    console.log(store.getState().login);
  } else {
    render(
      <Provider store={store}>
        <Index />
      </Provider>
    , homeContainer);
    console.log((store.getState().login).length);
  }
}

handleChange();

  store.subscribe(handleChange);
