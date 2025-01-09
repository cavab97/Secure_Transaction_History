import React from 'react';
import LoginView from './first.view';

function LoginContainer(props: any) {
  return (
    <>
      <LoginView {...props} />
    </>
  );
}

export default LoginContainer;
