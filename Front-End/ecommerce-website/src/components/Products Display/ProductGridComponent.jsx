import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import SideBarComponent from "./SideBarComponent";
import { CartState } from "../../context/Context";
import { Link } from "react-router-dom";

//Dynamic Rendering -> look at employee service for referencE
class ProductGridComponent extends Component {
  constructor(props) {
    super(props);

    const windowUrl = window.location.pathname.substring(1);
    console.log("window url: ", windowUrl);

    this.state = {
      category: windowUrl.substring(windowUrl.indexOf("/") + 1), //Please fix me, I am vulnerable to SQL Injection
      products: [],
    };
    console.log(this.state.category);

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
  onAddClick() {}

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
                    <Link to={`/product/${product.id}`}>
                      <button
                        className="btn btn-outline-dark flex-shrink-0"
                        type="button"
                        style={{ marginLeft: "10px" }}
                      >
                        <i
                          className="bi-bag-fill me-1"
                          style={{ marginRight: "4px" }}
                        ></i>
                        Buy Now
                      </button>
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <button
                        className="btn btn-outline-dark flex-shrink-0"
                        type="button"
                        style={{ marginLeft: "10px" }}
                      >
                        <i className=""></i>
                        View
                      </button>
                    </Link>
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
