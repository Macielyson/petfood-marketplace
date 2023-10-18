import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';

import { Provider } from 'react-redux'; // ele vai provisionar toda a store todos componetes paginas
import store from './store'; // ele vai pegar index.js
import Router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);