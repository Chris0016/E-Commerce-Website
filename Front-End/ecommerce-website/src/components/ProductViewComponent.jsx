import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
class ProductViewComponent extends React.Component {
  constructor(props) {
    super(props);

    const windowUrl = window.location.pathname.substring(1);
    console.log("window url for product: ", windowUrl);

    this.state = {
      //id: this.props.match.params.id,
      id: windowUrl.substring(windowUrl.indexOf("/") + 1), //Please fix me, I am vulnerable to SQL Injection
      name: "",
      price: 0,
      vendor: "holder vendor",
      description: "",
    };
    console.log("ID: ", this.state.id);
  }

  componentDidMount() {
    ProductService.getProductById(this.state.id).then((res) => {
      let product = res.data;

      this.setState({
        name: product.prodName,
        price: product.price,
        vendor: product.vendorName,
        description: product.description,
      });
    });
  }

  render() {
    return (
      <>
        {/* Product section*/}
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src="https://source.unsplash.com/random/600x700"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="small mb-1">SKU: BST-498</div>
                <h1 className="display-5 fw-bolder">{this.state.name}</h1>
                <div className="fs-5 mb-5">
                  <span>${this.state.price}</span>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium at dolorem quidem modi. Nam sequi consequatur
                  obcaecati excepturi alias magni, accusamus eius blanditiis
                  delectus ipsam minima ea iste laborum vero?
                </p>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="num"
                    // value="1" Uncomment me please
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    style={{ marginLeft: "10px" }}
                  >
                    <i className="bi-bag-fill me-1"></i>
                    Buy Now
                  </button>
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      this.props.onAddToCart(
                        this.state.id,
                        this.state.name,
                        this.state.description,
                        this.state.price
                      )
                    }
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tester: About product */}

        <div className="container text-left ">
          <div className="row mt-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  href="#!"
                  className="nav-link active"
                  id="desc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  type="button"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#!"
                  className="nav-link"
                  id="spec-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#specification"
                  type="button"
                  role="tab"
                  aria-controls="specification"
                  aria-selected="false"
                >
                  Specification
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#!"
                  className="nav-link"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews"
                  type="button"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#!"
                  className="nav-link"
                  id="qa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#qa"
                  type="button"
                  role="tab"
                  aria-controls="qa"
                  aria-selected="false"
                >
                  Questions and Answers
                </a>
              </li>
            </ul>

            <div
              className="tab-content"
              id="myTabContent"
              style={{ marginTop: "10px", fontSize: "90%" }}
            >
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae, culpa.
                </h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem corporis iusto iste ipsum omnis, sint aliquid
                  dignissimos natus adipisci saepe veritatis delectus excepturi
                  dolores sed aliquam, quam eius officia ipsam!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae sed ipsum eos veritatis odit quidem provident
                  praesentium assumenda amet ab nemo, dolorum repellat
                  consectetur officia nisi nulla laudantium est corporis
                  voluptatem excepturi dignissimos dicta fugit! Praesentium
                  totam, placeat explicabo accusantium laboriosam, maxime nobis
                  amet nostrum culpa dicta quaerat dolorem? Porro.
                </p>
                <h4>
                  Ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae, culpa.
                </h4>
                <p>
                  Dolor sit amet consectetur adipisicing elit. Voluptatem
                  corporis iusto iste ipsum omnis, sint aliquid dignissimos
                  natus adipisci saepe sed aliquam, quam eius officia ipsam!
                </p>
                <ul>
                  <li>Sint aliquid dignissimos natus adipisci</li>
                  <li>Nostrum culpa dicta quaerat dolorem?</li>
                  <li>Veritatis delectus excepturi dolores</li>
                  <li>Praesentium assumenda amet ab nemo</li>
                </ul>
                <p>
                  Praesentium assumenda amet ab nemo, dolorum repellat
                  consectetur officia nisi nulla laudantium est corporis
                  voluptatem excepturi dignissimos dicta fugit! Praesentium
                  totam, placeat explicabo accusantium laboriosam, maxime nobis
                  amet nostrum culpa dicta quaerat dolorem? Porro.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="specification"
                role="tabpanel"
                aria-labelledby="specification-tab"
              >
                <div className="table-responsive">
                  <table className="table table-bordered ps-table ps-table--specification">
                    <tbody>
                      <tr>
                        <td>Color</td>
                        <td>Black, Gray</td>
                      </tr>
                      <tr>
                        <td>Model year</td>
                        <td>2021</td>
                      </tr>
                      <tr>
                        <td>Dimensions and Weight</td>
                        <td>49.(48.5)</td>
                      </tr>
                      <tr>
                        <td>Connectivity</td>
                        <td>Wi-Fi Certified 802.11a/b/g/n/ac</td>
                      </tr>
                      <tr>
                        <td>Picture (Panel)</td>
                        <td>LED</td>
                      </tr>
                      <tr>
                        <td>Picture (processing)</td>
                        <td>Yes (HDR10, HLG)</td>
                      </tr>
                      <tr>
                        <td>Sound (Speakers and Amplifier)</td>
                        <td>10 W+10 W</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="overall-rating mb-4">
                      <h2>4.00</h2>
                      <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <p>1 Review</p>
                    </div>
                    <div className="rating-bar">
                      <span>5 Star</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>100%</span>
                    </div>
                    <div className="rating-bar">
                      <span>5 Star</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>0%</span>
                    </div>
                    <div className="rating-bar">
                      <span>5 Star</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>0%</span>
                    </div>
                    <div className="rating-bar">
                      {" "}
                      <span>5 Star</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>0%</span>
                    </div>
                    <div className="rating-bar">
                      <span>5 Star</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>0%</span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <form className="row rate-product">
                      <h4 className="col-md-12">Give Your Valuable Feedback</h4>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="Enter Name"
                          placeholder="Enter Name"
                          // id=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="Enter Email"
                          placeholder="Enter Email"
                          // id=""
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          rows=""
                          cols=""
                          placeholder="Write a review"
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-primary">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="qa"
                role="tabpanel"
                aria-labelledby="qa-tab"
              >
                <div className="questions-answers">
                  <h3>Questions and Answers</h3>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Have a question? Search for answer?"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Tester: About Product */}

        {/* Related items section*/}
        <section className="py-5 bg-light">
          <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Related products</h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  {/* Product image*/}
                  <img
                    className="card-img-top"
                    src="https://source.unsplash.com/random/450x300"
                    alt="..."
                  />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Fancy Product</h5>
                      {/* Product price*/}
                      $40.00 - $80.00
                    </div>
                  </div>
                  {/* Product actions*/}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* Sale badge*/}
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  {/* Product image*/}
                  <img
                    className="card-img-top"
                    src="https://source.unsplash.com/random/450x300"
                    alt="..."
                  />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Special Item</h5>
                      {/* Product reviews*/}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* Product price*/}
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  {/* Product actions*/}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* Sale badge*/}
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  {/* Product image*/}
                  <img
                    className="card-img-top"
                    src="https://source.unsplash.com/random/450x300"
                    alt="..."
                  />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Sale Item</h5>
                      {/* Product price*/}
                      <span className="text-muted text-decoration-line-through">
                        $50.00
                      </span>
                      $25.00
                    </div>
                  </div>
                  {/* Product actions*/}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* Product image*/}
                  <img
                    className="card-img-top"
                    src="https://source.unsplash.com/random/450x300"
                    alt="..."
                  />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">Popular Item</h5>
                      {/* Product reviews*/}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* Product price*/}
                      $40.00
                    </div>
                  </div>
                  {/* Product actions*/}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductViewComponent;
