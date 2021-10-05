import React from 'react';
import { signupFormValidation } from './signup.validation';
import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { signupFormUploadData } from './signup.action';
import { SignupComponent } from './signup.component';
import { useDispatch, useSelector } from 'react-redux';
import { convertSignupFormData } from './signup.convert';
import { SIGNUP_STORE_NAME } from './signup.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SignupContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  const signupFormSendData = (value) => {
    const data = convertSignupFormData(value);
    dispatch(signupFormUploadData(data));
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignupComponent
      isPending={isRequestPending(state.signupForm)}
      isError={isRequestError(state.signupForm)}
      isSuccess={isRequestSuccess(state.signupForm)}
      errorMessage={getRequestErrorMessage(state.signupForm)}
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      pageLoading={pageLoading}
    />
  );
}
