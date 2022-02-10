export const cartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "PRODUCTS_LOADED":
      const newState = { ...state, products: action.products };
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
