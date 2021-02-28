import { FETCH_PRODUCTS, IS_LOADING } from "../actions/types";

const initialState = {
  productsList: [],
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: [...payload],
        loading: null,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
