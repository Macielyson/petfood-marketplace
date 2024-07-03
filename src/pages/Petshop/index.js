import { useEffect } from 'react'; // quando carregar o componente
import { useDispatch, useSelector } from 'react-redux'; //
import { useParams } from 'react-router-dom'; 

import { requestPetshop } from '../../store/modules/shop/actions';
import logo from '../../assets/logo.png';

import Header from '../../components/header';
import Product from '../../components/product/card';

import './styles.css';

// match ele serve para recuperar id da ptshop
const Petshop = () => {
  const dispatch = useDispatch();
  const { petshop } = useSelector((state) => state.shop);
  const { id } = useParams();

  useEffect(() => {
    if(id){
      dispatch(requestPetshop(id));
    }
  }, []);
 
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={petshop.logo} className="img-fluid petshop-image" />
            <b>{petshop.nome}</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>2,8</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>{petshop.categoria}</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>2,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {petshop.products?.map((p) => (
                <Product product={p} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Petshop;
