import React from "react";
import SlideShowComponent from "./SlideShowComponent";
import HomeCategoriesComponent from "./HomeCategoriesComponent";
import FeaturedProductsComponent from "./FeaturedProductsComponent";
// class HomeComponent extends React.Component
function HomeComponent() {
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

export default HomeComponent;
