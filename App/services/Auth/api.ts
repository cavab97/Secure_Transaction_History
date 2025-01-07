import axios, {AxiosError} from 'axios';
import {API_BASE_URL} from '../index';
import AxiosMockAdapter from 'axios-mock-adapter';
import {LoginModel} from '../../model/Login';

/**
 * @function login
 * @description Call Login Endpoint to authenticate user
 * @param {*} params
 * @returns User Response
 */

// Create a new Axios mock instance
const mock = new AxiosMockAdapter(axios);

// Mock the GET request to return mockFiles data
mock.onGet('/auth').reply(200, loginDetails);

export const login = async (params: LoginModel) => {
  try {
    const response = await axios.get('/auth'); // Request to the mocked endpoint
    console.log('loginDetails' + {response});
    return response?.data.loginDetails;
  } catch (error) {
    // Ensuring the error is of type AxiosError
    if (error instanceof AxiosError) {
      // Access error response and message if available
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(errorMessage);
    }

    // If error is not an AxiosError, handle it here
    throw new Error('An unknown error occurred');
  }
};
