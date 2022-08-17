import axios from "axios";

const urlInternal = process.env.REACT_APP_LOGIN_ENDPOINT;

export const makeRequest = (url, options) => {
  return axios
    .get(`${urlInternal}${url}`, options)
    .then((res) => res.data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message ?? "Error")
    );
};
