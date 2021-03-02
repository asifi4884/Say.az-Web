import * as actionTypes from "./actionTypes";

export const authLogin = (login) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    login: login,
  };
};

export const authLoginStart = () => {
  localStorage.setItem("login", true);
  return (dispatch) => {
    dispatch(authLogin(true));
  };
};

export const authLoginFail = () => {
  localStorage.removeItem("login");
  return {
    type: actionTypes.AUTH_FAIL,
    login: false,
  };
};

export const authLoginCheck = () => {
  return (dispatch) => {
    const login = localStorage.getItem("login") ? true : false;
    if (login) {
      dispatch(authLogin(true));
    } else {
      dispatch(authLogin(false));
    }
  };
};
