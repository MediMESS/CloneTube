import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  authenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
        authenticated: true,
        loading: false,
        error: null,
      };

    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: null,
        token: null,
        loading: false,
      };

    case actionTypes.REFRESH_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default authReducer;
