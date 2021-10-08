import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field';
import styled from 'styled-components';
import { FieldLayout } from '../../../../lib/elements/layout';
import { ButtonField } from '../../../../lib/elements/button';
import { LoaderComponent } from '../../../../lib/elements/loader';
import { ErrorMessageComponent } from '../../../../lib/elements/errorMessage';

export function SignupFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    pageLoading,
  } = props;

  const isFieldError = (name) => {
    const errorMessage = errors[name] && touched[name] && errors[name];
    return errorMessage;
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container>
          {pageLoading && (
            <LoaderComponent titleTid="SIGNUP.SIGNUP_FORM.LOADER.PAGE_LOADING_TITLE" />
          )}
          <FieldLayout>
            <FieldPrimary
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldLogin}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldLogin]}
              error={isFieldError(fieldLogin)}
            />

            <FieldPrimary
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
              name={fieldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPassword]}
              error={isFieldError(fieldPassword)}
            />
          </FieldLayout>
          <ButtonField
            titleTid="TITLE.BUTTON.SIGNUP.TITLE"
            type="submit"
            disabled={isSubmitDisabled}
          />
          {isPending && (
            <LoaderComponent titleTid="SIGNUP.SIGNUP_FORM.LOADER.LOADER_TITLE" />
          )}
          {isError && <ErrorMessageComponent errorMessage={errorMessage} />}
        </Container>
      </form>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  gap: 12px;
`;
