import { GET_INFO_FAIL, GET_INFO_REQUEST, GET_INFO_SUCCESS } from './Constants';
import axios from 'axios';

export const GetInfoAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_INFO_REQUEST,
    });

    const {
      loginReducer: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const data = await axios.get(
      'https://private-052d6-testapi4528.apiary-mock.com/info ',
      config
    );

    dispatch({
      type: GET_INFO_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_INFO_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
