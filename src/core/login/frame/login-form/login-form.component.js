import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field';
import styled from 'styled-components';
import { FieldLayout } from '../../../../lib/elements/layout';
import { Button } from '../../../../lib/elements/button';

export function LoginFormComponent(props) {
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
          {pageLoading && 'pageLoading'}
          <FieldLayout>
            <FieldPrimary
              titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldLogin}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldLogin]}
              error={isFieldError(fieldLogin)}
            />

            <FieldPrimary
              titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
              name={fieldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPassword]}
              error={isFieldError(fieldPassword)}
            />
          </FieldLayout>
          <Button type="submit" disabled={isSubmitDisabled}>
            Войти
          </Button>
          {isPending && 'Loading...'}
          {isError && errorMessage}
        </Container>
      </form>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  gap: 12px;
`;
