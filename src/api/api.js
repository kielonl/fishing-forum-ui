import axios from "axios";

const urlInternal = process.env.REACT_APP_LOGIN_ENDPOINT;

export const makeRequest = (method, url, data = {}, headers = {}) => {
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
