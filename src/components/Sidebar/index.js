import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dock } from "react-dock";
import Product from "../Product/List";
import './styles.css';

const Sidebar = () => {
    const history = useHistory();
    const { cart } = useSelector((state) => state.shop);
    const total = cart.reduce((total, product) => {
        return total + product.preco;
    }, 0);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        // toda vex que a sidebar for carregada ele esculta o evento e manda pra true
        window.addEventListener('openCart', () => {
            setOpened(true);
        });
    }, []);

    return (
        <Dock
            position='right'
            isVisible={opened}
            onVisibleChange={(visible) => { setOpened(visible) }}
        >
            <div className='container-fluid h-100 pt-4 sidebar'>
                <h5>Minha sacola ({cart.length}) </h5>
                <div className='row products'>
                    {cart.map((p) => (
                        <Product product={p} />
                    ))}
                </div>

                <div className='row align-items-end footer'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <b className='d-inline-block'>
                            Total
                        </b>
                        <h3 className='d-inline-block'>
                            R$ {total.toFixed(2)}
                        </h3>
                    </div>
                    <button
                        onClick={() => history.push('/cadastro')}
                        className='btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center'>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </Dock>
    );
};

export default Sidebar;