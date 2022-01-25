import React, { Component } from "react";
class SideBarComponent extends Component {
  state = {};
  render() {
    return (
      <div
        className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "250px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Categories</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <i className="fa fa-home"></i>
              <span className="ms-2">Home</span>
            </a>
          </li>
          <li>
            <a href="/products/Computers" className="nav-link text-white">
              <i className="fa fa-dashboard"></i>
              <span className="ms-2">Computers</span>
            </a>
          </li>
          <li>
            <a href="/products/Wearables" className="nav-link text-white">
              <i className="fa fa-first-order"></i>
              <span className="ms-2">Wearables</span>
            </a>
          </li>
          <li>
            <a href="/products/Robotics" className="nav-link text-white">
              <i className="fa fa-cog"></i>
              <span className="ms-2">Robotics</span>
            </a>
          </li>
          <li>
            <a href="/products/HomeAndOffice" className="nav-link text-white">
              <i className="fa fa-bookmark"></i>
              <span className="ms-2">Home And Office</span>
            </a>
          </li>
          <li>
            <a href="/products/Software" className="nav-link text-white">
              <i className="fa fa-bookmark"></i>
              <span className="ms-2">Software</span>
            </a>
          </li>
          <li>
            <a href="/products/Photography" className="nav-link text-white">
              <i className="fa fa-bookmark"></i>
              <span className="ms-2">Photography</span>
            </a>
          </li>

          <li>
            <a href="/products/Networking" className="nav-link text-white">
              <i className="fa fa-bookmark"></i>
              <span className="ms-2">Networking</span>
            </a>
          </li>
          <li>
            <a href="/products/Articles" className="nav-link text-white">
              <i className="fa fa-bookmark"></i>
              <span className="ms-2"> Articles</span>
            </a>
          </li>

          <li>
            <a
              href="/products/ServicesAndRepair"
              className="nav-link text-white"
            >
              <i className="fa fa-bookmark"></i>
              <span className="ms-2">Services and Repair</span>
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong> John W </strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                Shopping Cart
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBarComponent;
