import React from 'react';
import { SignupFormContainer } from './frame/signup-form';
import { SIGNUP_LINK_ON_LOGIN } from './signup.constant';

import styled from 'styled-components';
import { SignupTitleComponent } from './frame/signup-title';
import { SignupFooterComponent } from './frame/signup-footer';

export function SignupComponent(props) {
  return (
    <div>
      <SignupTitleComponent />
      <SignupFormContainer {...props} />
      <SignupFooterComponent />
    </div>
  );
}
