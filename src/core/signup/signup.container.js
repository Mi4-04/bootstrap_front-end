import React from 'react';
import { Formik } from 'formik';
import { signupFormValidation } from './signup.validation';
import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { signupFormUploadData } from './signup.action';
import { SignupComponent } from './signup.component';
import { useDispatch } from 'react-redux';

export function SignupContainer() {
  const dispatch = useDispatch();

  const signupFormSendData = (value) => {
    dispatch(signupFormUploadData(value));
    console.log(value);
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignupComponent
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
    />
  );
}
