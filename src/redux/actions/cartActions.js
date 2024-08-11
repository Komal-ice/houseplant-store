// src/redux/actions/cartActions.js

// Action Types
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItemFromCart = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
