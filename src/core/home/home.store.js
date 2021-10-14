import { HOME_ACTION_TYPE } from './home.type';

import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

const initialState = {
  users: initRequestState(),
};

export function homeStore(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPE.HOME_UPLOAD_PENDING:
      return {
        ...state,
        users: setRequestPending(state.users),
      };
    case HOME_ACTION_TYPE.HOME_UPLOAD_SUCCESS:
      return {
        ...state,
        users: setRequestSuccess(state.users, action.payload),
        // users: action.payload,
      };

    case HOME_ACTION_TYPE.HOME_UPLOAD_ERROR:
      return {
        ...state,
        users: setRequestError(state.users, action.message),
      };

    default:
      return state;
  }
}
