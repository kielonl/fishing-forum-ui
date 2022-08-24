import axios from "axios";

const urlInternal = process.env.REACT_APP_API;

export const apiRequest = async (method, url, data = {}, headers = {}) => {
  console.log({ urlInternal });
  try {
    const response = await axios({
      method: method,
      url: `${urlInternal}${url}`,
      data: data,
      headers: headers,
    });

    return response.data;
  } catch {
    return undefined;
  }
};
