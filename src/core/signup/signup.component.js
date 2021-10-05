import React from 'react';
import { SignupFormContainer } from './frame/signup-form';
import { SIGNUP_LINK_ON_LOGIN } from './signup.constant';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export function SignupComponent(props) {
  const router = useRouter();

  return (
    <div>
      <div>Регистрация </div>
      <SignupFormContainer {...props} />
      <div>
        Есть аккаунт?{' '}
        <Span onClick={() => router.push(SIGNUP_LINK_ON_LOGIN)}>Войти</Span>
      </div>
    </div>
  );
}

const Span = styled.span`
  color: blue;
`;
