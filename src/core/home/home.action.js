import { httpRequest } from '../../main/http';
import { HOME_API_URL } from './home.constant';
import { performUserDataList } from './home.convert';
import { HOME_ACTION_TYPE } from './home.type';

export function homeUploadData() {
  return async (dispatch) => {
    dispatch({
      type: HOME_ACTION_TYPE.HOME_UPLOAD_PENDING,
    });
    try {
      const res = await httpRequest({
        method: HOME_API_URL.HOME_FORM_UPLOAD.METHOD,
        url: HOME_API_URL.HOME_FORM_UPLOAD.ENDPOINT,
      });

      const data = performUserDataList(res.data);

      dispatch({
        type: HOME_ACTION_TYPE.HOME_UPLOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: HOME_ACTION_TYPE.HOME_UPLOAD_ERROR,
        message: error.response.data.message,
      });
    }
  };
}
