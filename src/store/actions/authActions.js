import * as actionTypes from "./actionTypes";
import axios from "axios";

const APIKey = "AIzaSyB9uCmgPanAof32X6M7T64N3taYySpmhNA";
const signinURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  APIKey;
const signupURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + APIKey;
const refreshTokenURL =
  "https://securetoken.googleapis.com/v1/token?key=" + APIKey;

const authSuccess = (args) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: args.userId,
    token: args.token,
  };
};

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

const refreshToken = (token) => {
  return {
    type: actionTypes.REFRESH_TOKEN,
    token,
  };
};

export const checkTokenExpiration = (args) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authStart());
      const refreshAuthData = {
        refreshToken: args.refreshToken,
        grant_type: "refresh_token",
      };
      axios
        .post(refreshTokenURL, refreshAuthData)
        .then((resp) => {
          const { data } = resp;
          dispatch(refreshToken(data["id_token"]));
          dispatch(
            checkTokenExpiration({
              refreshToken: data["refresh_token"],
              expiresIn: data["expires_in"],
            })
          );
        })
        .catch((err) => {
          dispatch(authFail(err.message));
          dispatch(logout());
        });
    }, args.expiresIn);
  };
};

const authenticate = (dispatch, formData, authenticateURL) => {
  const authData = {
    email: formData.channel + "@clonetube.com",
    password: formData.password,
    returnSecureToken: true,
  };
  dispatch(authStart());
  axios
    .post(authenticateURL, authData)
    .then((resp) => {
      const { data } = resp;
      dispatch(authSuccess({ userId: data.localId, token: data.idToken }));
      dispatch(
        checkTokenExpiration({
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn,
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err.message));
    });
};

export const signup = (formData) => {
  return (dispatch) => {
    authenticate(dispatch, formData, signupURL);
  };
};

export const signin = (formData) => {
  return (dispatch) => {
    authenticate(dispatch, formData, signinURL);
  };
};
