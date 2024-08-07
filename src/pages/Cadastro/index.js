import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomer as setStoreCustmer } from '../../store/modules/shop/actions';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Illustration from '../../assets/illustration.png';

const Cadastro = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState(
    {
      name: "",
      email: "",
      phones: {
        mobile_phone: {
          country_code: "",
          area_code: "",
          number: ""
        }
      },
      document: "",
      type: "individual",
      birthdate: ""
    });


  const goToCheckout = () => {
    // console.log(customer);
    dispatch(setStoreCustmer(customer));
  };

  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hideCart />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco pra fazer o seu pet feliz.
            </h2>
            <br />
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
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value });
              }}
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              onChange={(e) => {
                setCustomer({
                  ...customer,
                  phones: {
                    ...customer.phones,
                    mobile_phone: {
                      ...customer.phones.mobile_phone,
                      number: e.target.value
                    }
                  }
                });
              }}
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
              onChange={(e) => {
                setCustomer({
                  ...customer,
                  document: e.target.value
                });
              }}
            />

            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
              onChange={(e) => {
                setCustomer({ ...customer, birthdate: e.target.value });
              }}
            />

            <Link
              to="/checkout"
              onClick={() => goToCheckout()}
              className="btn btn-lg btn-block btn-secondary"
            >
              Finalizar Pedido
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
