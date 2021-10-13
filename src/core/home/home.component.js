import React, { useState, useEffect } from 'react';
import { HomeTitleComponent } from './frame/home-title';
//import { HomeListItemConatainer } from './frame/home-list-item';
import { homeUploadData } from './home.action';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_STORE_NAME } from './home.constant';
import { performUserDataList } from './home.convert';
import { HomeListItemContainer } from './frame/home-list-item';

export function HomeComponent(props) {
  /*const dispatch = useDispatch();

  const users = useSelector((state) => state.HOME.users);

  useEffect((data) => {
    // const data = performUserDataList(value);
    dispatch(homeUploadData(data));
  }, []);*/

  return (
    <div>
      <HomeTitleComponent />

      <HomeListItemContainer {...props} />
      {/*Object.keys(users).map((user) => (
        <div>
          <HomeListItemComponent user={users[user]} />
        </div>
      ))*/}
    </div>
  );
}
