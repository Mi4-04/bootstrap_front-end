import React from 'react';
import { LoginFormContainer } from './frame/login-form';
import { LoginTitleComponent } from './frame/login-title';

export function LoginComponent(props) {
  return (
    <div>
      <LoginTitleComponent />
      <LoginFormContainer {...props} />
    </div>
  );
}
