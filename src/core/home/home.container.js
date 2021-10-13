import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_STORE_NAME } from './home.constant';
import { homeUploadData } from './home.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { USER_LIST_NAME, USER_ITEM_LIST_NAME } from './home.type';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { HomeComponent } from './home.component';

export function HomeContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[HOME_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  useEffect((data) => {
    dispatch(homeUploadData(data));
  }, []);

  const homeGetInitialValue = () => {
    return {
      [USER_LIST_NAME.USERS]: [],
    };
  };

  return (
    <HomeComponent
      isPending={isRequestPending(state.users)}
      isError={isRequestError(state.users)}
      isSuccess={isRequestSuccess(state.users)}
      errorMessage={getRequestErrorMessage(state.users)}
      initialValue={homeGetInitialValue()}
      getData={getRequestData(state.users)}
      pageLoading={pageLoading}
      users={USER_ITEM_LIST_NAME}
    />
  );
}
