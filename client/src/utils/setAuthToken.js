import axiosInstance from "./axiosInstance";

const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = token;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
