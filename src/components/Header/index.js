import React from "react";
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';

import './styles.css';

const Header = ({ whiteVersion, hiderCart }) => {

    const openDrawer = () => {
        const event = new CustomEvent('openCart'); // cria o evento customizado
        window.dispatchEvent(event); // manda o evento para o windows.
    }

    return (
        <div className="col-12">
            {/*padding e alinhamento.*/}
            <header className="py-4 px-4 text-center">
                <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
            </header>
            {/*toda vez q ele cllicar e desparando esse evento*/}
            {!hiderCart &&
                <button onClick={() => openDrawer()} className="btn btn-secondary cart-button">
                    <span className="mdi mdi-cart"></span> 2 Itens
                </button>
            }
        </div>
    );
}

export default Header;