import React from 'react';
import { HomeListItemComponent } from './home-list-item.component';

export function HomeListItemContainer(props) {
  const { pageLoading, isPending, isError, isSuccess, errorMessage, users } =
    props;

  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>
          <HomeListItemComponent
            pageLoading={pageLoading}
            isPending={isPending}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            isError={isError}
            user={user}
          />
        </div>
      ))}
    </div>
  );
}
