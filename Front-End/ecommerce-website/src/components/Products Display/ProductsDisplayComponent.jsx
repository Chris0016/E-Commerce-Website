import React, { Component } from "react";
import ProductGridComponent from "./ProductGridComponent";
import SideBarComponent from "./SideBarComponent";
class ProductsDisplayComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <SideBarComponent />
        <ProductGridComponent />
        <h1>Hello World</h1>
      </>
    );
  }
}

export default ProductsDisplayComponent;
