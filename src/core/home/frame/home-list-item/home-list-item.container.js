import React from 'react';
import { HomeListItemComponent } from './home-list-item.component';
import { USER_LIST_ITEM_KEY } from './home-list-item.type';

export function HomeListItemContainer(props) {
  const {
    initialValue,
    getData,
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    users,
  } = props;
  // тут вопросик
  const USER_LIST = users[USER_LIST_ITEM_KEY.USERS];

  return (
    <div>
      {Object.keys(users).map((user) => (
        <div>
          <HomeListItemComponent user={users[user]} />
        </div>
      ))}
    </div>
  );
}
