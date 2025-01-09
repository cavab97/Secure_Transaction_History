import axios, {AxiosError} from 'axios';
import {API_BASE_URL} from '../index';
import AxiosMockAdapter from 'axios-mock-adapter';
import {LoginModel} from '../../model/Login';
import {loginDetails, loginFailed} from '../data/loginData';
import {showMessage} from 'react-native-flash-message';

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

    if (
      params.username === response.data.username &&
      params.password === response.data.password
    ) {
      return response?.data.loginDetails;
    } else {
      mock.onGet('/authFailed').reply(200, loginFailed); //

      const responseError = await axios.get('/authFailed'); // Request to the mocked endpoint
      console.log(responseError.data.error.message);

      throw new Error(responseError.data.error.message);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || error.message;

      // Check if it's a connection or network-related error
      if (error.code === 'ECONNABORTED') {
        showMessage({
          message: 'Request timeout error!',
          type: 'danger',
        });
      } else if (errorMessage.includes('Network Error')) {
        showMessage({
          message: 'Network connection error!',
          type: 'danger',
        });
      } else if (error.response) {
        // The server responded with an error status
        showMessage({
          message: `Response error${error.response}`,
          type: 'danger',
        });
      } else {
        // Something else happened in setting up the request
        showMessage({
          message: `Unknown error${error.message}`,
          type: 'danger',
        });
      }
    } else {
      showMessage({
        message: `Error${error}`,
        type: 'danger',
      });
    }

    // If error is not an AxiosError, handle it here
    throw new Error('An unknown error occurred');
  }
};
