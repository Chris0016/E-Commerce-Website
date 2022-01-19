import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import SideBarComponent from "./SideBarComponent";
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
  }
  handleShopButtonClick(productId) {
    this.props.history.push(`/product/${productId}`);
  }

  render() {
    return (
      <>
        {/* <div className="container-fluid page-body-wrapper"> */}
        <div className="wrapper">
          <SideBarComponent />
          <div className="row" style={{ marginLeft: "5px" }}>
            {this.state.products.map((product) => (
              <div className="col col-md-3" style={{ marginTop: "5px" }}>
                <div className="card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center time">
                      <i className=""></i>
                      <small className="ml-1">{product.vendorName}</small>
                    </div>
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
                      <i
                        className="bi-bag-fill me-1"
                        style={{ marginRight: "4px" }}
                      ></i>
                      Buy Now
                    </button>
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.handleShopButtonClick(product.id)}
                    >
                      <i className=""></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* <img src="https://i.imgur.com/aTqSahW.jpg" width="250" /> */}
          </div>
        </div>
      </>
    );
  }
}

export default ProductGridComponent;
