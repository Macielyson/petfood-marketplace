import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Petshop from './pages/Petshop';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const Router = () => {
    return (
        <>
            <Sidebar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/petshop/:id' Component={Petshop} />
                    <Route path='/checkout' Component={Checkout} />
                    <Route path='/cadastro' Component={Cadastro} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;