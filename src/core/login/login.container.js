import React from 'react';
import { loginFormValidation } from './login.validation';
import { LOGIN_FIELD_NAME, LOGIN_FORM_FIELD_NAME } from './login.type';
import { loginFormUploadData } from './login.action';
import { LoginComponent } from './login.component';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_STORE_NAME } from './login.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { convertLoginFormData } from './login.covert';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function LoginContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[LOGIN_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  const loginFormSendData = (value) => {
    const data = convertLoginFormData(value);
    dispatch(loginFormUploadData(data));
  };

  const loginFormGetInitialValue = () => {
    return {
      [LOGIN_FIELD_NAME.LOGIN]: '',
      [LOGIN_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <LoginComponent
      isPending={isRequestPending(state.loginForm)}
      isError={isRequestError(state.loginForm)}
      isSuccess={isRequestSuccess(state.loginForm)}
      errorMessage={getRequestErrorMessage(state.loginForm)}
      validation={loginFormValidation}
      initialValue={loginFormGetInitialValue()}
      onSubmitForm={loginFormSendData}
      fieldName={LOGIN_FORM_FIELD_NAME}
      pageLoading={pageLoading}
    />
  );
}
