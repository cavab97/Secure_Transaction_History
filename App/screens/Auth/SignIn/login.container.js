import React from 'react';
import LoginView from './signIn.view';

function LoginContainer(props) {
  return (
    <>
      <LoginView {...props} />
    </>
  );
}

export default LoginContainer;
