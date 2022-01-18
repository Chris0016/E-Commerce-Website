import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";

import React, { Component } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import SlideShowComponent from "./components/SlideShowComponent";
import ProductViewComponent from "./components/ProductViewComponent";
import ProductGridComponent from "./components/Products Display/ProductGridComponent";
import ProductsDisplayComponent from "./components/Products Display/ProductsDisplayComponent";
import SideBarComponent from "./components/Products Display/SideBarComponent";
function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBarComponent />
      </div>
      <>
        <Router>
          <Switch>
            <Route exact path="/sidebar" component={SideBarComponent} />

            <Route
              exact
              path="/products/:category"
              component={ProductViewComponent}
            />

            <Route exact path="/product/:id" component={ProductViewComponent} />
            <Route exact path="/contact" component={ContactUsComponent} />
            <Route exact path="/about-us" component={AboutUsComponent} />
            <Route exact path="/" component={HomeComponent} />
          </Switch>
        </Router>
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
      {/*
            <Route exact path="/">
              <HomeComponent />
            </Route>

            <Route exact path="/products/:category">
             <ProductGridComponent />
            </Route>
            <Route exact path="/product/1">
              <ProductViewComponent />
            </Route>
            <Route exact path="/contact">
              <ContactUsComponent />
            </Route>

            <Route exact path="/about-us">
              <AboutUsComponent />
            </Route>
 

*/}
      <FooterComponent />
    </div>
  );
}

export default App;
