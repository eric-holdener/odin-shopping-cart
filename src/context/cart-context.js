import React from "react";

const CartContext = React.createContext({
  cart: {},
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});

export const CartProvider = CartContext.Provider;

export default CartContext;