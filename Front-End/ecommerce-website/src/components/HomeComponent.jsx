import React, { Component } from "react";
import SlideShowComponent from "./SlideShowComponent";
import HomeCategoriesComponent from "./HomeCategoriesComponent";
import FeaturedProductsComponent from "./FeaturedProductsComponent";
class HomeComponent extends React.Component {
  render() {
    return (
      <>
        <SlideShowComponent />
        <div>
          <HomeCategoriesComponent />
        </div>
        <div>
          <FeaturedProductsComponent />
        </div>
      </>
    );
  }
}

export default HomeComponent;
