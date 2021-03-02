import * as actionTypes from "../actions/actionTypes";

const initialState = {
  login: null,
};

const authLogin = (state, action) => {
  return {
    ...state,
    login: action.login,
  };
};

const authLoginFail = (state, action) => {
  return {
    ...state,
    login: action.login,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return authLogin(state, action);
    case actionTypes.AUTH_FAIL:
      return authLoginFail(state, action);
    default:
      return state;
  }
};

export default reducer;
