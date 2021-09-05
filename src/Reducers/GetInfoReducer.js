import {
  GET_INFO_FAIL,
  GET_INFO_REQUEST,
  GET_INFO_SUCCESS,
} from '../Actions/Constants';

export const getInfoReducer = (state = { loading: true, data: {} }, action) => {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return {
        ...state,
        loadingInfo: true,
      };
    case GET_INFO_SUCCESS:
      return {
        loadingInfo: false,
        data: action.payload,
      };
    case GET_INFO_FAIL:
      return {
        loadingInfo: false,
        errorInfo: action.payload,
      };

    default:
      return state;
  }
};
