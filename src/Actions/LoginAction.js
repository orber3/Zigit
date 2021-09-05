import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './Constants';

const BASE_URL =
  'https://private-052d6-testapi4528.apiary-mock.com/authenticate';
export const LoginAction = (email, password) => async (dispatch, loginData) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.post(BASE_URL, { email, password }, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
