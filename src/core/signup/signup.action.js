import { httpRequest } from '../../main/http';
import { SIGNUP_API_URL } from './signup.constant';
import { SIGNUP_ACTION_TYPE } from './signup.type';

export function signupFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING,
    });
    try {
      await httpRequest({
        method: SIGNUP_API_URL.SIGNUP_FORM_UPLOAD.METHOD,
        url: SIGNUP_API_URL.SIGNUP_FORM_UPLOAD.ENDPOINT,
        data,
      });
      dispatch({
        type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR,
      });
    }
  };
}
