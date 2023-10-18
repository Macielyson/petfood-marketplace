import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Illustration from '../../assets/illustration.png';

import Header from '../../components/Header';


const Cadastro = () => {



    const [customer, setCustomer] = useState({

        // colocar os dados em branco o qual vai ser substituidos
        external_id: new Date().getTime().toString(), // gerar um codigo unico
        name: "",
        type: "individual",
        country: "br",
        email: "",
        documents: [
            {
                type: "cpf",
                number: ""
            }
        ],
        phone_numbers: [
            ""
        ],
        birthday: ""
    });

    const dispatch = useDispatch(); // ele dispara a action para o reducer(envia os dados para o reducer).

    const goToCheChekout = () => {
        dispatch(setCustomer(customer));
        // console.log(customer);
    }

    return (
        //h-100 -> 100 na vertical. colocar tambem no root do index public
        <div className="container-fuid h-100 bg-primary">

            <Header whiteVersion hiderCart />

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
                            onChange={(e) => {
                                setCustomer({ ...customer, name: e.target.value });
                            }}
                        />
                        <input
                            type="email"
                            className="form-control form-control-lg mb-3"
                            placeholder="Email"
                            onChange={(e) => {
                                setCustomer({ ...customer, email: e.target.value });
                            }}
                        />
                        <input
                            type="tel"
                            className="form-control form-control-lg mb-3"
                            placeholder="Telefone"
                            onChange={(e) => {
                                setCustomer({ ...customer, phone_numbers: [e.target.value] });
                            }}
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="CPF"
                            onChange={(e) => {
                                setCustomer({
                                    ...customer, documents: [
                                        {
                                            type: 'cpf',
                                            number: e.target.value
                                        }
                                    ]
                                });
                            }}
                        />
                        <input
                            type="date"
                            className="form-control form-control-lg mb-3"
                            placeholder="Data de nascimento"
                            onChange={(e) => {
                                setCustomer({ ...customer, birthday: e.target.value });
                            }}
                        />
                        <button
                            className="btn btn-lg btn-block btn-secondary "
                            onClick={goToCheChekout}
                        >
                            Finalizar pedido
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cadastro;