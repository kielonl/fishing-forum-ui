import axios from "axios";

const urlInternal = process.env.REACT_APP_LOGIN_ENDPOINT;

export const makeRequest = (method, url, data = {}, headers = {}) => {
  // return axios(`${urlInternal}${url}`, options)
  //   .then((res) => res.data)
  //   .catch((error) =>
  //     Promise.reject(error?.response?.data?.message ?? "Error")
  //   );
  try {
    const response = axios({
      method: method,
      url: `${urlInternal}${url}`,
      data: data,
      headers: headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};
