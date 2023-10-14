import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);