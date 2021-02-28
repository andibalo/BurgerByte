import axiosInstance from "../utils/axiosInstance";
import { FETCH_PRODUCTS, IS_LOADING } from "./types";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: IS_LOADING,
    payload: true,
  });

  try {
    const res = await axiosInstance.get("/api/product/");

    // console.log("FETCH PRODUCTS", res);

    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: IS_LOADING,
      payload: null,
    });
  }
};
