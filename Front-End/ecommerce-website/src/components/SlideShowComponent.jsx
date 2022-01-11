import React, { Component } from "react";
class SlideShowComponent extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1920x1080"
              alt="First slide"
            />
            <div className="centered">
              <a
                style={{ color: "#2F4F4F", textDecoration: "none" }}
                href="/products"
              >
                <h1 style={{ textAlign: "left" }}>Centered </h1>
              </a>
              <blockquote>
                <p
                  style={{ fontSize: "20px", textAlign: "left", width: "40%" }}
                >
                  <b>
                    For 50 years, WWF has been protecting the future of nature.
                    The world's leading conservation organization, supported by
                    1.2 million members in the United States.
                  </b>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShowComponent;
