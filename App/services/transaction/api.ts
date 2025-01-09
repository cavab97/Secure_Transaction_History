import axios, {AxiosError} from 'axios';
import {JSON_PLACEHOLDER_FAKE_API_MOCK} from '../index';
import AxiosMockAdapter from 'axios-mock-adapter';
import {mockFiles} from '../data/mockData';
import {TransactionData} from '../../model/transactionType';

/**
 * @function getTransaction
 * @description Call getTransaction Endpoint to get Transactions
 * @returns Transactions
 */

export const getTransaction = async (): Promise<TransactionData[]> => {
  try {
    // Create a new Axios mock instance
    const mock = new AxiosMockAdapter(axios);

    // Mock the GET request to return mockFiles data
    mock.onGet('/mock-data').reply(200, mockFiles);
    const response = await axios.get('/mock-data'); // Request to the mocked endpoint
    return response.data;
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
