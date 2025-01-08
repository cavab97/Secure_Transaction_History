import axios, {AxiosError} from 'axios';
import {JSON_PLACEHOLDER_FAKE_API_MOCK} from '../index';
import AxiosMockAdapter from 'axios-mock-adapter';

/**
 * @function getPost
 * @description Call getPost Endpoint to get posts
 * @returns Posts
 */

// Create a new Axios mock instance
const mock = new AxiosMockAdapter(axios);

// Mock the GET request to return mockFiles data
mock.onGet('/mock-data').reply(200, mockFiles);
export const getPost = async (payload: any): Promise<Post[]> => {
  try {
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

// Define a function to fetch posts (Example)
// const getPost = async (payload: any): Promise<Post[]> => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return await response.json();
// };
