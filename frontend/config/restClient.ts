import axios, { AxiosInstance } from "axios";

/**
 * Create axios instance based on client side or server side request
 * @returns - Axios instance
 */
const restClient = (context?: any): AxiosInstance => {
  const { req } = context || {};

  if (typeof window === "undefined") {
    /**
     * Server side requests
     */
    return axios.create({
      baseURL: process.env.API_BASE_PATH,
      headers: {
        ...req!.headers, // From NextPage context (includes cookie)
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  /**
   * Client side requests
   */
  return axios.create({
    baseURL: process.env.API_BASE_PATH,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export default restClient;
