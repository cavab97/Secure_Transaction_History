import {LOGIN_REQUEST} from './Constants';

/**

 * @function loginRequest
 * @param {*} payload
 * @description Return type for login request to saga
 * @returns state
 */
export const loginRequest = (payload: any) => ({
  type: LOGIN_REQUEST,
  payload,
});
