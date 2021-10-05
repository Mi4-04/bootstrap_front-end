import { httpRequest } from '../../main/http';
import { LOGIN_API_URL } from './login.constant';
import { LOGIN_ACTION_TYPE } from './login.type';
import { authSetData } from '../../lib/common/auth';
import { LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH } from './login.constant';
import { redirect } from '../../main/navigation/navigation.core';

export function loginFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_PENDING,
    });
    try {
      const res = await httpRequest({
        method: LOGIN_API_URL.LOGIN_FORM_UPLOAD.METHOD,
        url: LOGIN_API_URL.LOGIN_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_SUCCESS,
      });

      redirect(LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH);
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_ERROR,
      });
    }
  };
}
