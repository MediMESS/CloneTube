import { combineReducers } from "redux";
import appReducer from "./app";
import authReducer from "./auth";

const store = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default store;
