import React from "react";
import { useSelector } from 'react-redux';
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';

import { Link } from 'react-router-dom';
import './styles.css';

const Header = ({ whiteVersion, hiderCart }) => {
    const { cart } = useSelector((state) => state.shop);

    const openDrawer = () => {
        const event = new CustomEvent('openCart'); // cria o evento customizado
        window.dispatchEvent(event); // manda o evento para o windows.
    }

    return (
        <div className="col-12">
            {/*padding e alinhamento.*/}
            <header className="py-4 px-4 text-center">
                <Link to="/">
                    <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
                </Link>
            </header>

            {/*toda vez q ele cllicar e desparando esse evento*/}
            {!hiderCart &&
                <button onClick={() => openDrawer()} className="btn btn-secondary cart-button">
                    <span className="mdi mdi-cart"></span> {cart.length} Itens
                </button>
            }
        </div>
    );
};

export default Header;