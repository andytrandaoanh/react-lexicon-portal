// src/reducers.js
import { SEARCH_WORD } from "./action_types";
import { DATA_LOADED } from "./action_types";


const initialState = {
    searches: []
};
function rootReducer(state = initialState, action) {
  if (action.type === SEARCH_WORD) {
    console.log(action.payload);
    return Object.assign({}, state, {
      searches: state.searches.concat(action.payload)
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;