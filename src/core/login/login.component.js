import React from 'react';
import { LoginFormContainer } from './frame/login-form';

export function LoginComponent(props) {
  return (
    <div>
      <div>Вход </div>
      <LoginFormContainer {...props} />
    </div>
  );
}
