const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src="https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/l/a/large_4ff86195-4343-4727-87e4-65620a0d2fc7.png" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">R$ 30,00</label>
                    </h6>
                    <small>
                        <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
                    </small>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <button className="btn btn-secondary rounded-circle"> - </button>
                </div>
            </div>
        </div>
    );
}

export default Product;