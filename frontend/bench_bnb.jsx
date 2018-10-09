import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signUp} from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
  window.austin = {user: {email: 'austin', password: 'password'}};


  ReactDOM.render(
    <h1>React</h1>,
      root
  );

});
