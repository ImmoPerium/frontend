import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import advertisementsReducer from "./advertisementsReducer";

export default combineReducers({
  usersReducer,
  advertisementsReducer,
});
