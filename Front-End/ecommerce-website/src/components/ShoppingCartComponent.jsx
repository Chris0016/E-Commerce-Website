import React, { Component } from "react";
import { useHistory } from "react-router-dom";

class ShoppingCartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleOnBackClick() {
  //   this.props.history.back();
  //                 Something like this  onClick={() => this.handleOnBackClick()}

  // }
  render() {
    // const { goBack } = this.props.navigation();
    console.log("Shopping Cart Page: ", this.props.cart);
    return (
      <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="product-details mr-2">
              <div className="d-flex flex-row align-items-center">
                <i className="fa fa-arrow"></i>

                <button /* onClick={history.back} */>
                  <span className="ml-2">
                    <a style={{ color: "black" }}>Continue Shopping</a>
                  </span>
                </button>
              </div>
              <hr />
              <h6 className="mb-0">Shopping cart</h6>
              <div className="d-flex justify-content-between">
                <span>
                  You have {this.props.cart.length} items in your cart
                </span>
                <div className="d-flex flex-row align-items-center">
                  <span className="text-black-50">Sort by:</span>
                  <div className="price ml-2">
                    <span className="mr-1">price</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>

              {this.props.cart.map((product) => (
                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                  <div className="d-flex flex-row">
                    <img
                      className="rounded"
                      src="https://i.imgur.com/QRwjbm5.jpg"
                      width="40"
                    />
                    <div className="ml-2">
                      <span className="font-weight-bold d-block">
                        {product.prodName}
                      </span>
                      <span className="spec">256GB, Navy Blue</span>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center">
                    <span className="d-block">{product.quantity}</span>
                    <span className="d-block ml-5 font-weight-bold">
                      ${product.price}
                    </span>
                    <i className="fa fa-trash-o ml-3 text-black-50"></i>
                  </div>
                </div>
              ))}
              {/*               
      
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row">
                  <img
                    className="rounded"
                    src="https://i.imgur.com/GQnIUfs.jpg"
                    width="40"
                  />
                  <div className="ml-2">
                    <span className="font-weight-bold d-block">One pro 7T</span>
                    <span className="spec">256GB, Navy Blue</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block">2</span>
                  <span className="d-block ml-5 font-weight-bold">$900</span>
                  <i className="fa fa-trash-o ml-3 text-black-50"></i>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row">
                  <img
                    className="rounded"
                    src="https://i.imgur.com/o2fKskJ.jpg"
                    width="40"
                  />
                  <div className="ml-2">
                    <span className="font-weight-bold d-block">
                      Google pixel 4 XL
                    </span>
                    <span className="spec">256GB, Axe black</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block">1</span>
                  <span className="d-block ml-5 font-weight-bold">$800</span>
                  <i className="fa fa-trash-o ml-3 text-black-50"></i>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row">
                  <img
                    className="rounded"
                    src="https://i.imgur.com/Tja5H1c.jpg"
                    width="40"
                  />
                  <div className="ml-2">
                    <span className="font-weight-bold d-block">
                      Samsung galaxy Note 10&nbsp;
                    </span>
                    <span className="spec">256GB, Navy Blue</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block">1</span>
                  <span className="d-block ml-5 font-weight-bold">$999</span>
                  <i className="fa fa-trash-o ml-3 text-black-50"></i>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="payment-info">
              <div className="d-flex justify-content-between align-items-center">
                <span>Card details</span>
                <img
                  className="rounded"
                  src="https://i.imgur.com/WU501C8.jpg"
                  width="30"
                />
              </div>
              <span className="type d-block mt-3 mb-1">Card type</span>
              <label className="radio">
                <input type="radio" name="card" value="payment" checked />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/color/48/000000/mastercard.png"
                  />
                </span>
              </label>
              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/visa.png"
                  />
                </span>
              </label>
              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                  />
                </span>
              </label>
              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/paypal.png"
                  />
                </span>
              </label>
              <div>
                <label className="credit-card-label">Name on card</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="credit-card-label">Card number</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="credit-card-label">Date</label>
                  <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="12/24"
                  />
                </div>
                <div className="col-md-6">
                  <label className="credit-card-label">CVV</label>
                  <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="342"
                  />
                </div>
              </div>
              <hr className="line" />
              <div className="d-flex justify-content-between information">
                <span>Subtotal</span>
                <span>$3000.00</span>
              </div>
              <div className="d-flex justify-content-between information">
                <span>Shipping</span>
                <span>$20.00</span>
              </div>
              <div className="d-flex justify-content-between information">
                <span>Total(Incl. taxes)</span>
                <span>$3020.00</span>
              </div>
              <button
                className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                type="button"
                onClick={{}}
              >
                <span>$3020.00</span>
                <span>
                  Checkout<i className="fa fa-long-arrow-right ml-1"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCartComponent;
