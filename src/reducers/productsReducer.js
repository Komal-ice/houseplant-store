const initialState = {
  products: [
    // Define your products here
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your products reducer cases here
    default:
      return state;
  }
};

export default productsReducer;
