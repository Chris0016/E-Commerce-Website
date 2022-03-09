import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductViewComponent from "./components/ProductViewComponent";
import ProductGridComponent from "./components/Products Display/ProductGridComponent";
import SideBarComponent from "./components/Products Display/SideBarComponent";
import ShoppingCartComponent from "./components/ShoppingCartComponent";

class App extends Component {
  userData;
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("Hello Im the dState Func");

  //   const sCart = localStorage.getItem("cart");
  //   const parsedCart = JSON.parse(sCart);

  //   if (sCart == null) {
  //     return { cart: [] };
  //   } else {
  //     console.log("cart String mount on shopping cart: ", sCart);
  //     console.log("cart Object at mount on shopping cart: ", parsedCart);
  //     // this.setState(
  //     //   // cart: [...parsedCart, parsedCart],
  //     //   (state, props) => {
  //     //     return {
  //     //       cart: [{ hey: "hello" }],
  //     //     };
  //     //   }
  //     // );

  //     return { cart: parsedCart };
  //     console.log("After appending", this.state.cart);
  //   }
  // }

  componentDidMount() {
    const sCart = localStorage.getItem("cart");
    const parsedCart = JSON.parse(sCart);

    if (sCart == null) {
      this.setState({ cart: [] });
    } else {
      console.log("cart String mount on shopping cart: ", sCart);
      console.log("cart Object at mount on shopping cart: ", parsedCart);
      this.setState({
        cart: parsedCart,
      });
    }
  }
  handleAddToCart = (productId, prodName, description, price) => {
    console.log(" Handle Add to Cart Called ", productId);
    console.log("->cart state: ", this.state.cart);
    const holder = {
      productId,
      quantity: 1,
      prodName,
      description,
      price,
    };

    const idx = this.indexOfProduct(productId);

    if (idx == -1) {
      // Product does not exist in cart
      this.setState(
        {
          cart: [...this.state.cart, holder],
        },
        () => {
          console.log("Updated Cart: ", this.state.cart);
          localStorage.setItem("cart", JSON.stringify(this.state.cart));
        }
      );
    } else {
      let newArray = [...this.state.cart];
      newArray[idx] = {
        ...newArray[idx],
        quantity: newArray[idx].quantity + 1,
      };
      this.setState(
        {
          cart: newArray,
        },
        () => {
          console.log("Updated Cart: ", this.state.cart);
          localStorage.setItem("cart", JSON.stringify(this.state.cart));
        }
      );
    }
    // localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  indexOfProduct(productId) {
    for (let index = 0; index < this.state.cart.length; index++) {
      if (this.state.cart[index].productId == productId) return index;
    }
    return -1;
  }

  render() {
    return (
      <div className="App">
        {/* <div className="container-fluid">
          <NavBarComponent />
        </div> */}
        <>
          <Router>
            <div className="container-fluid">
              <NavBarComponent />
            </div>

            <Switch>
              <Route exact path="/sidebar">
                <SideBarComponent />
              </Route>
              <Route exact path="/products/:category">
                <ProductGridComponent />
              </Route>
              <Route exact path="/cart">
                <ShoppingCartComponent />
              </Route>
              <Route exact path="/product/:id">
                {/*onAddToCart={this.handleAddToCart} */}
                <ProductViewComponent onAddToCart={this.handleAddToCart} />
              </Route>

              <Route exact path="/contact">
                <ContactUsComponent />
              </Route>

              <Route exact path="/about-us">
                <AboutUsComponent />
              </Route>
              <Route exact path="/">
                <HomeComponent />
              </Route>
            </Switch>
          </Router>
        </>
        <FooterComponent />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <div className="container-fluid">
//         <NavBarComponent />
//       </div>
//       <>
//         <Router>
//           <Switch>
//             <Route exact path="/sidebar" component={SideBarComponent} />

//             <Route
//               exact
//               path="/products/:category"
//               component={ProductGridComponent}
//             />
//             <Route exact path="/cart" component={ShoppingCartComponent} />

//             <Route exact path="/product/:id" component={ProductViewComponent} />
//             <Route exact path="/contact" component={ContactUsComponent} />
//             <Route exact path="/about-us" component={AboutUsComponent} />
//             <Route exact path="/" component={HomeComponent} />
//           </Switch>
//         </Router>
//       </>
//       <FooterComponent />
//     </div>
//   );
// }

// export default App;
