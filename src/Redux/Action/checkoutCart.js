const updateCart = (product) => {
  return {
    type: "UPDATE_CART",
    payload: product,
  };
};

export default updateCart;
