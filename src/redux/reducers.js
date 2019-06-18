// src/reducers.js
import { SEARCH_WORD } from "./action_types";
import { DATA_LOADED } from "./action_types";


const initialState = {
  examples: [],
  words: []
};
function rootReducer(state = initialState, action) {
  if (action.type === SEARCH_WORD) {
    console.log(action);
    return Object.assign({}, state, {
      words: state.words.concat(action.payload)
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