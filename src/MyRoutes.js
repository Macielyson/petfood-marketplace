import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Home from './pages/home';
import Teste from './pages/teste';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petshop/:id" element={<Petshop />} />
        <Route path="/checkout" element={<Checkout />} />
        {/*<Route path="/sidebar" element={<Sidebar />} />*/}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
};

export default MyRoutes;
