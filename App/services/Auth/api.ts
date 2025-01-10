import axios, {AxiosError} from 'axios';
import {API_BASE_URL} from '../index';
import AxiosMockAdapter from 'axios-mock-adapter';
import {LoginModel} from '../../model/Login';
import {loginDetails, loginFailed} from '../data/loginData';
import {showMessage} from 'react-native-flash-message';
import {MessageType} from '../../components/helpers/enum';

/**
 * @function login
 * @description Call Login Endpoint to authenticate user
 * @param {*} params
 * @returns User Response
 */

// Create a new Axios mock instance

// Mock the GET request to return mockFiles data

export const login = async (params: LoginModel) => {
  try {
    const mock = new AxiosMockAdapter(axios);

    mock.onGet('/auth').reply(200, loginDetails);

    const response = await axios.get('/auth');

    if (
      params.username === response.data.username &&
      params.password === response.data.password
    ) {
      return response?.data.loginDetails;
    } else {
      mock.onGet('/authFailed').reply(200, loginFailed); //

      const responseError = await axios.get('/authFailed'); // Request to the mocked endpoint

      throw new Error(responseError.data.error.message);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || error.message;
      // Check if it's a connection or network-related error
      if (error.code === 'ECONNABORTED') {
        showMessage({
          message: 'Request timeout error!',
          type: MessageType.Danger,
        });
      } else if (errorMessage.includes('Network Error')) {
        showMessage({
          message: 'Network connection error!',
          type: MessageType.Danger,
        });
      } else if (error.response) {
        // The server responded with an error status
        showMessage({
          message: `Response error${error.response}`,
          type: MessageType.Danger,
        });
      } else {
        // Something else happened in setting up the request
        showMessage({
          message: `Unknown error${error.message}`,
          type: MessageType.Danger,
        });
      }
    } else {
      showMessage({
        message: `Error${error}`,
        type: MessageType.Danger,
      });
    }

    // If error is not an AxiosError, handle it here
    throw new Error('An unknown error occurred');
  }
};
