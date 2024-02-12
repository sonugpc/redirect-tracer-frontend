import axios from "axios";
import Config from "../../../config";

const API_BASE_URL = Config.API_URL; // Replace with your API base URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000, // Set the timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json",
    // You can add any additional headers here
  },
});

const handleResponse = (response) => {
  // Customize the response handling logic based on your API structure
  return response.data.data;
};

const handleError = (error) => {
  // Customize the error handling logic based on your requirements
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Response error:", error.response.data);
    console.error("Status code:", error.response.status);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request error:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error message:", error.message);
  }

  throw error; // Propagate the error to the calling code
};

const ApiService = {
  get: async (url, params = {}) => {
    try {
      const response = await axiosInstance.get(url, { params });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  post: async (url, data = {}) => {
    try {
      const response = await axiosInstance.post(url, data);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default ApiService;
