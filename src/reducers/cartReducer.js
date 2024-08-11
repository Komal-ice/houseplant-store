// src/reducers/cartReducer.js
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
