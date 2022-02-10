import React, { Component } from "react";
class ContactUsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <article className="article-full is-clearfix post tag-branding-design featured ">
          <div className="article-meta-info">
            <div className="article-meta is-size-7 is-uppercase">
              <div className="tags is-inline-block">About Us</div>
              {/* <!-- <read-time word-count="600" v-cloak></read-time> --> */}
            </div>

            <h1 className="article-full-title">Lets Start A Conversation</h1>
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
              src={require("./images/Contact-Us-Background.jpg")}
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
              ChampStore is a digital store dedicated to making access to
              techonology in a variety of domains accessible to everyone. We
              offer some of the most competitive prices available as well as the
              best quality products on the market. Take a look around our
              website and explore the different categories.
            </p>
            <p>
              We'd love to hear from you. Please feel free to contact us if you
              have any question or comments.
            </p>

            <form role="form" id="contact-form" className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      autoComplete="off"
                      id="Name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control textarea"
                      rows="3"
                      name="Message"
                      id="Message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="btn btn-success pull-right">
                    Send a message
                  </button>
                </div>
              </div>
            </form>
          </section>
        </article>
      </div>
    );
  }
}

export default ContactUsComponent;
