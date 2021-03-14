import axiosInstance from "../utils/axiosInstance";
import { SIGN_UP, IS_LOADING, LOG_IN, CURRENT_USER, LOG_OUT } from "./types";

export const getCurrentUser = () => async (dispatch) => {
  dispatch({
    type: IS_LOADING,
    payload: true,
  });

  try {
    const res = await axiosInstance.get("/api/user/me");

    console.log("GET CURRENT USER", res.data.data);

    dispatch({
      type: CURRENT_USER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: IS_LOADING,
      payload: false,
    });
  }
};

export const register = (username, email, password) => async (dispatch) => {
  dispatch({
    type: IS_LOADING,
    payload: true,
  });

  try {
    const res = await axiosInstance.post("/api/user/register", {
      username,
      email,
      password,
    });

    console.log("AUTH ACTION", res);

    dispatch({
      type: SIGN_UP,
      payload: res.data.data,
    });

    return true;
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: IS_LOADING,
      payload: false,
    });

    return error.response.data;
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: IS_LOADING,
    payload: true,
  });

  try {
    const res = await axiosInstance.post("/api/user/login", {
      email,
      password,
    });

    console.log(res);

    dispatch({
      type: LOG_IN,
      payload: res.data.data,
    });

    return true;
  } catch (error) {
    console.log(error.response.data);

    dispatch({
      type: IS_LOADING,
      payload: false,
    });

    return error.response.data;
  }
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};
