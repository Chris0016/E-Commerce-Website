import { createContext, useContext, useEffect, useReducer } from "react";
import React from "react";
import ProductService from "../services/ProductService";
import { cartReducer } from "./Reducers";

const Cart = createContext();
const Context = ({ children }) => {
  let products = [];

  console.log("part1", products);

  useEffect(async () => {
    const { data: loadedProducts } = await ProductService.getAllProducts();
    console.log("response: ", JSON.stringify(loadedProducts));
    dispatch({ type: "PRODUCTS_LOADED", products: loadedProducts });
    console.log(state);
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

// This context API is no longer being used. I decided to stick with the regular props, raising and handling of events.
// Uset this code in the component you want to include the cart
//  const { state } = CartState();
//     console.log("Cart Inside the Shopping Component: ", state);
