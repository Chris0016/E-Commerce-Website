import React, { Component } from "react";

class AboutUsComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <article className="article-full is-clearfix post tag-branding-design featured ">
          <div className="article-meta-info">
            <div className="article-meta is-size-7 is-uppercase">
              <div className="tags is-inline-block">About Us</div>
              {/* <!-- <read-time word-count="600" v-cloak></read-time> --> */}
            </div>

            <h1 className="article-full-title">
              Get To Know Us:
              <br /> Who We Are and what We Do
            </h1>
            <hr />
            <div
              className="level article-author-date"
              // style={{ textAlign: "left" }}
            >
              <div className="level-left">
                <div className="author-info is-clearfix">
                  <a
                    href="TODO Please Complete Me"
                    className="is-size-7 is-uppercase is-inline-flex has-text-weight-bold"
                  >
                    <div className="author-name">Christopher Perez</div>
                  </a>
                </div>
              </div>
              <div className="level-right has-text-blue-grey is-size-6 is-normal">
                November 16, 2022
              </div>
            </div>
          </div>
          <figure className="article article-full-image image">
            <img
              className=""
              src={require("./images/Home-Background-Image.jpg")}
              // src="https://s2.best-wallpaper.net/wallpaper/1600x900/1807/Hong-Kong-house-architecture-channel-from-bottom-view_1600x900.jpg"
              width="100%"
              height="600"
            />
          </figure>
          <section
            className="article-full-context"
            style={{
              width: "100%",
              marginTop: "50px",
              fontSize: "1.1rem",
              textAlign: "left",
              padding: "0px 50px 0px 50px",
            }}
          >
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ChampStore is a digital store dedicated to making access to
              techonology in a variety of domains accessible to everyone. We
              offer some of the most competitive prices available as well as the
              best quality products on the market. Take a look around our
              website and explore the different categories.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </article>
      </div>
    );
  }
}

export default AboutUsComponent;
