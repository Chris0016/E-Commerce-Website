import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SlideShowComponent from "./components/SlideShowComponent";
import ProductViewComponent from "./components/ProductViewComponent";
function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBarComponent />
      </div>
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/product/1">
              <ProductViewComponent />
            </Route>
            <Route path="/contact">
              <ContactUsComponent />
            </Route>

            <Route path="/about-us">
              <AboutUsComponent />
            </Route>

            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
      {/* <Switch> */}
      {/* <Route
            path="/"
            render={(routeProps) => <HomeComponent {...routeProps} />}
          />
          <Route
            path="/contact"
            render={(routeProps) => <ContactUsComponent {...routeProps} />}
          />
          <Route
            path="/about-us"
            render={(routeProps) => <AboutUsComponent {...routeProps} />}
          /> */}
      {/* </Switch> */}

      <FooterComponent />
    </div>
  );
}

export default App;
