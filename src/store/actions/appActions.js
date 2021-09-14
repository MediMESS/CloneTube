import * as actionTypes from "./actionTypes";

export const setMode = (mode) => {
  return {
    type: actionTypes.SET_MODE,
    mode,
  };
};
