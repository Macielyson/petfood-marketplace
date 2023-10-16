import React from 'react';
import './styles.css';

import { useState, useEffect } from 'react';
import { Dock } from "react-dock";
import Product from "../Product/List";

const Sidebar = () => {

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
                <h5>Minha sacola (5) </h5>
                <div className='row products'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (<Product />))}
                </div>

                <div className='row align-items-end footer'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <b className='d-inline-block'>
                            Total
                        </b>
                        <h3 className='d-inline-block'>
                            R$ 90,00
                        </h3>
                    </div>
                    <button className='btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center'>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </Dock>
    );
}

export default Sidebar;