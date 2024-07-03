// import dayjs from 'dayjs';
// import _ from 'underscore';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import {
//  setTransaction as setStoreTransaction,
//  makePruchase,
//} from '../../store/modules/shop/actions';
import Header from '../../components/header';
import Product from '../../components/product/list';

import './styles.css';

const Checkout = () => {
  {/*
  const dispatch = useDispatch();

  const { cart, transactionFee, defaultRecipient } = useSelector(
    (state) => state.shop
  );

  const total = cart.reduce((total, product) => {
    return total + product.preco;
  }, 0);
*/}
  const [orders, setOrders] = useState({
    payments: [
      {
        payment_method: "credit_card",
        credit_card: {
          installments: 1,
          statement_descriptor: "AVENGERS",
          card: {
            number: "", // numero
            holder_name: "", // nome
            exp_month: 0, // mes
            exp_year: 0, // ano
            cvv: "", // cvv
            billing_address: {
              line_1: "", // numero, rua/logradouro, bairro
              zip_code: "", // cep
              city: "", // cidade
              state: "", // estado
              country: "br" //
            }
          }
        }
      }],
    items: [],
    split: []
  });

  const setCardValue = (key, value) => {
    setOrders({
      ...orders,
      payments: [{
        ...orders.payments,
        credit_card: {
          ...orders.payments[0].credit_card,
          card: {
            ...orders.payments[0].credit_card.card,
            [key]: value
          }
        }
      }]
    });
  };
  const setAddressValue = (key, value) => {
    setOrders({
      ...orders,
      payments: [{
        ...orders.payments,
        credit_card: {
          ...orders.payments[0].credit_card,
          card: {
            ...orders.payments[0].credit_card.card,
            billing_address: {
              ...orders.payments[0].credit_card.card.billing_address,
              [key]: value
            },
          }
        }
      }]
    });
  };

  const makePurchase = () => {
    console.log(orders)
  }
  {/*
  const makePurchase = () => {
    dispatch(setStoreTransaction(orders));
    setTimeout(() => {
      dispatch(makePruchase());
    }, 100);
  };

  const getSplitRules = () => {
    const productsByPetshop = _.groupBy(
      cart,
      (product) => product.petshop_id.recipient_id
    );

    let result = [];

    Object.keys(productsByPetshop).map((petshop) => {
      const products = productsByPetshop[petshop];
      const totalValuePerPetshop = products
        .reduce((total, product) => {
          return total + product.preco;
        }, 0)
        .toFixed(2);

      const totalFee = (totalValuePerPetshop * transactionFee).toFixed(2);

      result.push({
        recipient_id: products[0].petshop_id.recipient_id,
        percentage: Math.floor(
          ((totalValuePerPetshop - totalFee) / total) * 100
        ),
        liable: true,
        charge_processing_fee: true,
      });
    });

    const totalPetshopsPercentage = result.reduce((total, recipient) => {
      return total + parseFloat(recipient.percentage);
    }, 0);

    result.push({
      ...defaultRecipient,
      percentage: 100 - totalPetshopsPercentage,
    });

    return result;
  };

  useEffect(() => {
    // UPDATE AMOUNT
    // UPDATE ITEMS
    setOrders({
      ...orders,
      amount: total.toFixed(2).toString().replace('.', ''),
      items: cart.map((product) => ({
        id: product._id,
        title: product.nome,
        unit_price: product.preco.toFixed(2).toString().replace('.', ''),
        quantity: 1,
        tangible: true,
      })),
      split_rules: getSplitRules(),
    });
  }, [total]);
*/}
  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                  onChange={(e) => setOrders({
                    ...orders,
                    zip_code: e.target.value
                  })}
                // onChange={(e) => setOrders({ ...orders, })}
                // onChange={(e) => setShippingValue('zipcode', e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                  onChange={(e) => setOrders({
                    ...orders,
                    city: e.target.value
                  })}
                //onChange={(e) => setShippingValue('city', e.target.value)}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                // faltando o logradouro
                // onChange={(e) => setShippingValue('street', e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"

                // onChange={(e) =>
                //   setShippingValue('street_number', e.target.value)
                // }
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"

                //faltando
                // onChange={(e) =>
                //  setShippingValue('neighborhood', e.target.value)
                // }
                />
              </div>
              <div className="col-2 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                  onChange={(e) => setOrders({
                    ...orders,
                    state: e.target.value
                  })}
                //  onChange={(e) => setShippingValue('state', e.target.value)}
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setOrders({
                      ...orders,
                      number: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Nome no Cartão"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setOrders({
                      ...orders,
                      holder_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                // onChange={(e) =>
                //  setOrders({
                //    ...orders,
                //    card_expiration_date: e.target.value,
                // })
                // }
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setOrders({
                      ...orders,
                      cvv: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                {/*<h3>R$ {total.toFixed(2)}</h3>*/}
              </div>
              <div className="col-12">
                <button
                  onClick={() => makePurchase()}
                  className="btn btn-block btn-lg btn-primary"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="box col mb-4 box-sidebar">
              {/*<h4>Minha Sacola ({cart.length})</h4>*/}

              <div className="row products">
                {/*  {cart.map((p) => (
                  <Product product={p} />
                ))}*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
