import React, { Component } from "react";
class FeaturedProductsComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Featured Products</h3>
        <p className="text-secondary">
          Take a look at our some of our latest and greatest products available.
        </p>

        <hr></hr>
        <div className="row g-3 mt-5 mb-5">
          <div className="col-md-4">
            <div className="card">
              <a href="#" target={"_blank"} style={{ color: "black" }}>
                <div className="card-img-top image-card image-card-1">
                  <img
                    src="/images/Apple-computer-Featured-Product.png"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  {" "}
                  <span className="text-uppercase text-danger fw-bold fs-6">
                    Computer
                  </span>
                  <h5 className="card-title text-dark mt-2">
                    <b>What you wants to know about hubspot? </b>
                  </h5>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua..
                  </p>{" "}
                  <p href="#" className="text-dark">
                    Read full story...
                  </p>
                  <div className="mt-4 about d-flex justify-content-between align-items-center">
                    {" "}
                    <span>By Prabhjot Singh</span> <span>On 12 Oct, 2020</span>{" "}
                    <span>5 min read</span>{" "}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <a href="#" target={"_blank"} style={{ color: "black" }}>
                <div className="card-img-top image-card image-card-2">
                  {" "}
                  <img
                    src="/images/Printer-Featured-Product.png"
                    alt="..."
                  />{" "}
                </div>
                <div className="card-body">
                  {" "}
                  <span className="text-uppercase text-danger fw-bold fs-6">
                    Office {"&"} Home
                  </span>
                  <h5 className="card-title text-dark mt-2">
                    <b>What you wants to know about hubspot? </b>
                  </h5>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua..
                  </p>{" "}
                  <p href="#" className="text-dark">
                    Read full story...
                  </p>
                  <div className="mt-4 about d-flex justify-content-between align-items-center">
                    {" "}
                    <span>By Prabhjot Singh</span> <span>On 12 Oct, 2020</span>{" "}
                    <span>5 min read</span>{" "}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              {" "}
              <a href="#" target={"_blank"} style={{ color: "black" }}>
                <div className="card-img-top image-card image-card-3">
                  {" "}
                  <img
                    src="/images/Drone-Featured-Product.png"
                    alt="..."
                  />{" "}
                </div>
                <div className="card-body">
                  <span className="text-uppercase text-danger fw-bold fs-6">
                    Robotics
                  </span>
                  <h5 className="card-title text-dark mt-2">
                    <b>What you wants to know about hubspot? </b>
                  </h5>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua..
                  </p>{" "}
                  <p href="#" className="text-dark">
                    Read full story...
                  </p>
                  <div className="mt-4 about d-flex justify-content-between align-items-center">
                    {" "}
                    <span>By Prabhjot Singh</span> <span>On 12 Oct, 2020</span>{" "}
                    <span>5 min read</span>{" "}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProductsComponent;
