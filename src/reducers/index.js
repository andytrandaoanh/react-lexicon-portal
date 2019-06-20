import { combineReducers } from "redux";
import searchWord from "./search_word";

const rootReducer = combineReducers({
  searchs: searchWord
});

export default rootReducer;
