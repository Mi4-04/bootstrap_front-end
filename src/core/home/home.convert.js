import { USER_DATA_NAME } from './home.type';

export const performUserDataList = (raw) => ({
  users: raw[USER_DATA_NAME.USERS],
});
