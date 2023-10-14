import React from "react";
import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img src="https://m.media-amazon.com/images/I/81h7AIrhP-L._AC_SY879_.jpg"
                className="img-fluid align-center" />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label className="badge badge-primary">R$ 90,00</label>
            </h4>
            <small>
                <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
            </small>
        </div>
    );
}

export default Product;