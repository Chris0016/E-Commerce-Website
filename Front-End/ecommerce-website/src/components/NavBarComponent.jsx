import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <h3>
            <b>ChampStore </b>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/products/Computers">
              <li className="nav-item">
                {/* href="/products/Computers" */}
                <div className="nav-link" color="black">
                  All
                </div>
              </li>
            </Link>
            <Link to="/cart">
              <li className="nav-item">
                <div className="nav-link" color="black">
                  <AiOutlineShoppingCart color="black" fontSize="25px" />
                </div>
              </li>
            </Link>
            <Link to="/about-us">
              <li className="nav-item">
                <div className="nav-link" color="black">
                  About Us
                </div>
              </li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">
                <div className="nav-link" color="black">
                  Contact
                </div>
              </li>
            </Link>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
*/}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBarComponent;
