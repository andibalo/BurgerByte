import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../actions/types";

const initialState = localStorage.getItem("cart")
  ? [...JSON.parse(localStorage.getItem("cart"))]
  : [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return payload;
    case EMPTY_CART:
      localStorage.removeItem("cart");
      return [];
    default:
      return state;
  }
};
