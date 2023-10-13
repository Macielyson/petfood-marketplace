import React from "react";

import Illustration from '../../assets/illustration.png';

import Header from '../../components/Header';


const Cadastro = () => {
    return (
        //h-100 -> 100 na vertical. colocar tambem no root do index public
        <div className="container-fuid h-100 bg-primary">

            <Header whiteVersion />

            <div className="row">
                {/*my-auto -> centro vertical da tela. text-right ->alinha a direita*/}
                <div className="col-6 text-right my-auto">

                    {/*img-fluid -> nao utrapassar o contexto do bloco*/}
                    <img src={Illustration} className="img-fluid" />
                </div>
                <div className="col-6 text-center">
                    <div className="box col-8">
                        <h3 className="text-center">Falta pouco pra fazer o seu pet feliz.</h3>
                        <br />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="Nome completo"
                        />
                        <input
                            type="email"
                            className="form-control form-control-lg mb-3"
                            placeholder="Email"
                        />
                        <input
                            type="tel"
                            className="form-control form-control-lg mb-3"
                            placeholder="Telefone"
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="CPF"
                        />
                        <input
                            type="date"
                            className="form-control form-control-lg mb-3"
                            placeholder="Data de nascimento"
                        />
                        <button className="btn btn-lg btn-block btn-secondary ">
                            Finalizar pedido
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cadastro;