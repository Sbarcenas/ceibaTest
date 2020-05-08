import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import ErrorReducer from "./ErrorReducer";

const rootReducer = combineReducers({
  users: userReducer,
  error: ErrorReducer
});
export default rootReducer;
