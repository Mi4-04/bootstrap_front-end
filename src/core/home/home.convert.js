import { USER_DATA_NAME } from './home.type';

export const performUserDataList = (raw) => {
  return raw.map((user) => ({
    [USER_DATA_NAME.ID]: user[USER_DATA_NAME.ID],
    [USER_DATA_NAME.LOGIN]: user[USER_DATA_NAME.LOGIN],
  }));
};
