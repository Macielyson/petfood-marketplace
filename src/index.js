import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Petshop from './pages/Petshop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Petshop />
  </React.StrictMode>
);