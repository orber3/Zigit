import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './Reducers/LoginReducer';
import { getInfoReducer } from './Reducers/GetInfoReducer';

export const reducer = combineReducers({
  loginReducer,
  getInfoReducer,
});

const userInfosFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  loginReducer: { userInfo: userInfosFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
