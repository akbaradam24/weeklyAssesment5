const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case "UPDATE_CART": {
      return {
        ...state,
        cart: state.cart, //[...state.cart, payload]
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default cartReducer;
