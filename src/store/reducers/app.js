import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mode: "light",
  showSidebar: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default appReducer;
