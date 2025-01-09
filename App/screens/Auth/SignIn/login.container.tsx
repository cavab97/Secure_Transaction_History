import React from 'react';
import LoginView from './signIn.view';

function LoginContainer(props: any) {
  return (
    <>
      <LoginView {...props} />
    </>
  );
}

export default LoginContainer;
