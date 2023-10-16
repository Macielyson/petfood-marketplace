import './styles.css';

const Petshop = () => {
    return (
        <li className="petshop d-inline-block">
            <div className='d-inline-block'>
                <img src="https://vagas.byintera.com/wp-content/uploads/2021/05/logo-petlove-push.png"
                    className="img-fluid" />
            </div>

            <div className='d-inline-block pl-3 align-bottom'>
                <b>Petlove</b>
                <div className="petshop-infos">
                    <span className="mdi mdi-star"></span>
                    <text>
                        <b>2,8</b>
                    </text>

                    <span className="mdi mdi-cash-multiple"> </span>
                    <text>
                         $$
                    </text>

                    <span className="mdi mdi-crosshairs-gps"></span>
                    <text>
                        2,9km
                    </text>

                </div>
                <label className="badge badge-primary">Frete Gratis</label>
            </div>
        </li>
    );
}

export default Petshop;