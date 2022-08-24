import axios from "axios";

const urlInternal = process.env.REACT_APP_API;

export const makeRequest = (method, url, data = {}, headers = {}) => {
  const response = axios({
    method: method,
    url: `${urlInternal}${url}`,
    data: data,
    headers: headers,
  });
  return response;
};
