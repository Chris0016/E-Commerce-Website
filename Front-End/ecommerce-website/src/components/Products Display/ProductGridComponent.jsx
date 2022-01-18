import React, { Component } from "react";
import ProductService from "../../services/ProductService";

//Dynamic Rendering -> look at employee service for referencE
class ProductGridComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.match.params.category,
      products: [],
    };
    console.log(props);
    this.handleShopButtonClick = this.handleShopButtonClick.bind(this);
  }

  componentDidMount() {
    ProductService.getProductsByCategory(this.state.category).then((res) => {
      this.setState({ products: res.data });
    });

    //   ProductService.getAllProducts().then((res) => {
    //     this.setState({ products: res.data });
    //   });
  }
  handleShopButtonClick(productId) {
    this.props.history.push(`/product/${productId}`);
  }
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span>Hottest Giveaways</span>
            <span className="custom-badge text-uppercase">See More</span>
          </div>
          <div className="row">
            {this.state.products.map((product) => (
              <div className="col-md-4">
                <div className="card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center time">
                      <i className="fa fa-clock-o"></i>
                      <small className="ml-1">{product.vendorName}</small>
                    </div>
                    <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
                  </div>
                  <div className="text-center">
                    <img src="https://i.imgur.com/TbtwkyW.jpg" width="250" />
                  </div>
                  <div className="text-center">
                    <h5>{product.prodName}</h5>
                    <span className="text-success">${product.price}</span>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.handleShopButtonClick(product.id)}
                    >
                      <i className="bi-bag-fill me-1"></i>
                      Buy Now
                    </button>
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.handleShopButtonClick(product.id)}
                    >
                      <i className="bi-bag-fill me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-md-4">
              <div className="card">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center time">
                    <i className="fa fa-clock-o"></i>
                    <small className="ml-1 text-primary">00:02:13</small>
                  </div>
                  <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
                </div>
                <div className="text-center">
                  <img src="https://i.imgur.com/bUWshC0.jpg" width="250" />
                </div>
                <div className="text-center">
                  <h5>Kruve Coffee Filters</h5>
                  <span className="text-success">$80 value</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center time">
                    <i className="fa fa-clock-o"></i>
                    <small className="ml-1">2 Days</small>
                  </div>
                  <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
                </div>
                <div className="text-center">
                  <img src="https://i.imgur.com/aTqSahW.jpg" width="250" />
                </div>
                <div className="text-center">
                  <h5>Apple watch 2.0</h5>
                  <span className="text-success">$360 value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductGridComponent;
