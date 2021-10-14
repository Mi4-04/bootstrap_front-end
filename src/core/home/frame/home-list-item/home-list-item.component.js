import React from 'react';
import { FieldSecondary } from '../../../../lib/elements/field';
import { LoaderComponent } from '../../../../lib/elements/loader';
import { ErrorMessageComponent } from '../../../../lib/elements/errorMessage';

export function HomeListItemComponent(props) {
  const user = props.user;

  const { pageLoading, isPending, isError, isSuccess, errorMessage } = props;

  return (
    <div>
      {pageLoading && (
        <LoaderComponent titleTid="SIGNUP.SIGNUP_FORM.LOADER.PAGE_LOADING_TITLE" />
      )}
      <div key={user.id}>
        <FieldSecondary titleTid="USER.USER_FIELD.ID.TITLE" userId={user.id} />
      </div>
      <h3>{user.login}</h3>

      <hr />
      {isPending && (
        <LoaderComponent titleTid="SIGNUP.SIGNUP_FORM.LOADER.LOADER_TITLE" />
      )}
      {isError && <ErrorMessageComponent errorMessage={errorMessage} />}
    </div>
  );
}
