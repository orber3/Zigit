import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS } from '../Actions/Constants';

const INITIAL_STATE = {
  isSignedIn: null,
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true, ...state };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        isSignedIn: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
