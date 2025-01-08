export interface LoginModel {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
}

export interface SuccessResponse {
  status: string;
  message: string;
  user: User;
  auth_token: string;
}

export interface LoginDetails {
  username: string;
  password: string;
  successResponse: SuccessResponse;
}
