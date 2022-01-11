import React, { Component } from "react";
class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p
                className="text-justify"
                style={{ fontSize: "90%", color: "#cccccc" }}
              >
                ChampStore is a digital store dedicated to making access to
                techonology in a variety of domains accessible to everyone. We
                offer some of the most competitive prices available as well as
                the best quality products on the market. Take a look around our
                website and explore the different categories.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Computers</a>
                </li>
                <li>
                  <a href="">Wearables</a>
                </li>
                <li>
                  <a href="">Home {"&"} Office</a>
                </li>
                <li>
                  <a href="">Robotics</a>
                </li>
                <li>
                  <a href="">Software</a>
                </li>
                <li>
                  <a href="">Aricles</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
