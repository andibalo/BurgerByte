import {
  LOG_IN,
  SIGN_UP,
  IS_LOADING,
  LOG_OUT,
  CURRENT_USER,
} from "../actions/types";
import setAuthToken from "../utils/setAuthToken";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP:
    case LOG_IN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token,
        loading: null,
      };
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: null,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case LOG_OUT:
      setAuthToken(null);
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: null,
        token: null,
      };
    default:
      return state;
  }
};
