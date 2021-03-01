import { ADD_TO_CART, EMPTY_CART } from "./types";

export const addToCart = (cart) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
};

export const emptyCart = () => (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });
};
