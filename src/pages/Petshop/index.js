import React from "react";
import Header from "../../components/Header";
import './styles.css';

import Product from "../../components/Product/Card";

const Petshop = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="https://vagas.byintera.com/wp-content/uploads/2021/05/logo-petlove-push.png"
                            className="img-fluid petshop-image" />
                        <b>Petlove</b>
                        <div className="petshop-infos">
                            <span className="mdi mdi-star"></span>
                            <text>
                                <b>2,8</b>
                            </text>

                            <span className="mdi mdi-cash-usd-outline"></span>
                            <text>
                                $$
                            </text>

                            <span className="mdi mdi-crosshairs-gps"></span>
                            <text>
                                2,9km
                            </text>

                            <label className="badge badge-primary">Frete Gratis</label>
                        </div>
                    </div>

                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(p => (<Product />))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Petshop;