export const loginDetails = {
  username: 'john_doe@gmail.com',
  password: 'securePassword123',
  successResponse: {
    status: 'success',
    message: 'Login successful',
    user: {
      id: 1,
      username: 'john_doe',
      email: 'john_doe@example.com',
      first_name: 'John',
      last_name: 'Doe',
      profile_picture: 'https://example.com/images/john_doe.jpg',
    },
    auth_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNjc5ODk5NjA3fQ.LsF27IHbz5BCh_z0QgRlGs6UxzJr5esPQ5dF-WxQXlM',
  },
};

export const loginFailed = {
  error: {
    message: 'Invalid username or password',
    code: 'INVALID_CREDENTIALS',
  },
};
