import React, { createContext, useReducer } from "react";
import dataReducer from './DataReducer';

export const initialState = {
  cart: []
};

//Create Context
export const CartContext = createContext(initialState);

//Provider Component

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(dataReducer, initialState);

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  }

  function decreaseQty(id){
    dispatch({
      type: 'DECREASE_QTY',
      payload: id
    });
  }
  function increaseQty(id){
    
    dispatch({
      type: 'INCREASE_QTY',
      payload: id
    });
    
  }

  function deleteCartItem(id) {

    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: id
    });
  }

  return (
    <>
      <CartContext.Provider value={{
        cart: state.cart,
        addToCart,
        deleteCartItem,
        decreaseQty,
        increaseQty
      }}>

        {children}
      </CartContext.Provider>

    </>
  )
}

